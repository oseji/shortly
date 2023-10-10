import { useState, useEffect } from "react";
import clipboardCopy from "clipboard-copy";
import "intersection-observer";

import workingImg from "./assets/illustration-working.svg";
import recognitionImg from "./assets/icon-brand-recognition.svg";
import detailsImg from "./assets/icon-detailed-records.svg";
import customizeImg from "./assets/icon-fully-customizable.svg";
import instagram from "./assets/icon-instagram.svg";
import { useRef } from "react";
import "intersection-observer";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";
import facebook from "./assets/icon-facebook.svg";

const LandingPage = () => {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [copy, setCopy] = useState("Copy");
  const [linkSubmitted, setLinkSubmitted] = useState(false);

  const resultContainerRef = useRef(null);
  const inputErrTextRef = useRef(null);
  const inputFieldRef = useRef(null);
  const copyBtnRef = useRef(null);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  //console.log(url);

  //handling API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const resultData = result
          .json()
          .then((res) => res)
          .then((data) => {
            console.log(data);
            if (data.ok) {
              setShortLink(data.result.full_short_link);
            }
          });
        console.log(resultData);
      } catch (err) {
        console.log(err);
      }
    };

    //fetchData is called only when the link is submitted
    if (linkSubmitted) {
      fetchData();

      //if theres no URL then hide the container displaying short link results
      if (url === "") {
        const resultContainer = resultContainerRef.current;
        resultContainer.classList.toggle("hideLinkResultContainer");
      }
    }
  }, [url, linkSubmitted]);

  //handling intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (i) => {
        //console.log(i);
        i.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.remove("sectionHidden");
            item.target.classList.remove("featureContainerTransition");
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    //observe sections
    sectionRefs.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    //observe featureBoxes
    boxRefs.forEach((boxRef) => {
      if (boxRef.current) {
        observer.observe(boxRef.current);
      }
    });

    //Clean up the observer
    return () => {
      sectionRefs.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });

      boxRefs.forEach((boxRef) => {
        if (boxRef.current) {
          observer.unobserve(boxRef.current);
        }
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultContainer = resultContainerRef.current;
    resultContainer.classList.toggle("hideLinkResultContainer");
    setLinkSubmitted(true);
  };

  const checkInputField = () => {
    const inputErr = inputErrTextRef.current;
    const inputField = inputFieldRef.current;
    console.log(inputErr, inputField);

    if (url === "") {
      inputErr.classList.remove("hidden");
      inputField.classList.add("errInputBorder");
    } else {
      inputErr.classList.add("hidden");
      inputField.classList.remove("errInputBorder");
    }
  };

  const handleCopyBtn = (e) => {
    e.preventDefault();
    const copyBtn = copyBtnRef.current;

    copyBtn.classList.remove("copyBtnColor");
    copyBtn.classList.add("copyBtnClicked");
    setCopy("Copied !");

    setTimeout(() => {
      setCopy("Copy");
      copyBtn.classList.add("copyBtnColor");
      copyBtn.classList.remove("copyBtnClicked");
    }, 1500);

    //copy the link
    clipboardCopy(shortLink)
      .then(alert(`${shortLink} copied to clipboard`))
      .catch((err) => console.log(err));
  };

  return (
    <div className="landingPage">
      {/* FIRST SECTION */}
      <section className="firstSection" ref={sectionRefs[0]}>
        <div className="textSection ">
          <h1 className="firstSectionHeading">More than just shorter links</h1>

          <p className="text mt-5 w-96">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>

          <button className="getStartedBtn mt-5">Get started</button>
        </div>

        <div className="imgSection">
          <img
            src={workingImg}
            alt="working illustration"
            className="workingImg"
          />
        </div>
      </section>

      {/* SEARCH LINK SECTION */}
      <section className="searchLinkSection sectionHidden" ref={sectionRefs[1]}>
        <form className="inputLinkContainer" onSubmit={handleSubmit}>
          <div className="linkInputGrp">
            <input
              type="text"
              className="linkInput"
              placeholder="Shorten a link here..."
              value={url}
              ref={inputFieldRef}
              onChange={(e) => {
                setUrl(e.target.value);
                //console.log(url);
              }}
              required
            />

            <p className="inputErrText hidden" ref={inputErrTextRef}>
              Please add a link
            </p>
          </div>

          <button className="shortenLinkBtn" onClick={checkInputField}>
            Shorten it!
          </button>
        </form>

        <div
          className="inputResultsContainer hideLinkResultContainer"
          ref={resultContainerRef}
        >
          <div className="resultContainer">
            <p className="inputText">{url}</p>

            <div className="shortLinkGrp">
              <a href={shortLink}>
                <p className="shortLink">{shortLink}</p>
              </a>

              <button
                className="copyResultBtn copyBtnColor"
                ref={copyBtnRef}
                onClick={handleCopyBtn}
              >
                {copy}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="secondSection sectionHidden" ref={sectionRefs[2]}>
        <h1 className="sectionHeading text-center">Advanced Statistics</h1>

        <p className="text-slate-400 font-semibold w-96 text-center mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="featuresGrp">
          <div
            className="featureContainer featureContainerTransition"
            ref={boxRefs[0]}
          >
            <img
              src={recognitionImg}
              alt="brand recognition"
              className="featureImg"
            />

            <div className="featureBox">
              <h1 className="featureHeading">brand recognition</h1>

              <p className="text text-sm">
                Boost your brand recognition with each click.Generic links dont
                mean a thing.Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>

          <div
            className="featureContainer featureContainerTransition lg:mt-7"
            ref={boxRefs[1]}
          >
            <img src={detailsImg} alt="details" className="featureImg" />

            <div className="featureBox">
              <h1 className="featureHeading">detailed records</h1>

              <p className="text text-sm">
                Gain insight into who's clicking your links.Knowing when and
                where people engage with your content helps inform better
                decisons.
              </p>
            </div>
          </div>

          <div
            className="featureContainer featureContainerTransition lg:mt-14"
            ref={boxRefs[2]}
          >
            <img
              src={customizeImg}
              alt="brand recognition"
              className="featureImg"
            />

            <div className="featureBox">
              <h1 className="featureHeading">fully customizable</h1>

              <p className="text text-sm">
                Improve brand awareness and discoverability through customizable
                links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="thirdSection sectionHidden" ref={sectionRefs[3]}>
        <h1 className="sectionHeading text-center text-white">
          Boost Your Links Today
        </h1>

        <button className="getStartedBtn mt-5 mx-auto block">
          Get started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer sectionHidden" ref={sectionRefs[4]}>
        <div className="footerCol">
          <p className="text-3xl font-bold">Shortly</p>
        </div>

        <div className="footerCol">
          <h1 className="footerColHeading">Features</h1>

          <ul className="footerDetails">
            <li>Link shortening</li>
            <li>branded links</li>
            <li>analytics</li>
          </ul>
        </div>

        <div className="footerCol">
          <h1 className="footerColHeading">Resources</h1>

          <ul className="footerDetails">
            <li>blog</li>
            <li>developers</li>
            <li>support</li>
          </ul>
        </div>

        <div className="footerCol">
          <h1 className="footerColHeading">Company</h1>

          <ul className="footerDetails">
            <li>about</li>
            <li>our teams</li>
            <li>careers</li>
            <li>contact</li>
          </ul>
        </div>

        <div className="footerIconGrp">
          <img src={facebook} alt="facebook" className="footerIcon" />
          <img src={twitter} alt="twitter" className="footerIcon" />
          <img src={pinterest} alt="pinterest" className="footerIcon" />
          <img src={instagram} alt="instagram" className="footerIcon" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
