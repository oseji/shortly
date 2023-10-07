import { useState, useEffect } from "react";
import workingImg from "./assets/illustration-working.svg";
import recognitionImg from "./assets/icon-brand-recognition.svg";
import detailsImg from "./assets/icon-detailed-records.svg";
import customizeImg from "./assets/icon-fully-customizable.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";
import facebook from "./assets/icon-facebook.svg";

const LandingPage = () => {
  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");

  //console.log(url);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);

      result.json().then((data) => {
        console.log(data);
        setShortLink(data.result.short_link);
      });
      //console.log(result);
    };
    fetchData();
    console.log(shortLink);
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
  };

  return (
    <div className="landingPage">
      {/* FIRST SECTION */}
      <section className="firstSection">
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
      <section className="searchLinkSection">
        <form className="inputLinkContainer" onSubmit={handleSubmit}>
          <input
            type="text"
            className="linkInput"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              //console.log(url);
            }}
            required
          />
          <button
            className="shortenLinkBtn"
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(e);
            // }}
          >
            Shorten it!
          </button>
        </form>

        <div className="inputResultsContainer">
          <div className="resultContainer">
            <p className="inputText">
              https://chat.openai.com/c/93d4941f-f983-4af5-869f-e51538b73217
            </p>

            <div className="shortLinkGrp">
              <p className="shortLink">www.shortly.com</p>
              <button className="copyResultBtn">Copy</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="secondSection">
        <h1 className="sectionHeading text-center">Advanced Statistics</h1>

        <p className="text-slate-500 font-semibold w-96 text-center mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div className="featuresGrp">
          <div className="featureContainer">
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

          <div className="featureContainer lg:mt-7">
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

          <div className="featureContainer lg:mt-14">
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
      <section className="thirdSection">
        <h1 className="sectionHeading text-center text-white">
          Boost Your Links Today
        </h1>

        <button className="getStartedBtn mt-5 mx-auto block">
          Get started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
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
