import { useRef } from "react";
import { motion } from "framer-motion";
import menu from "./assets/menu.png";

const Navbar = () => {
  const menuRef = useRef(null);

  const toggleClass = () => {
    const menu = menuRef.current;
    console.log(menu.classList.toggle("showNav"));
  };

  const navbarVariants = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
    },
    animation: {
      duration: 0.5,
      type: "tween",
    },
  };

  return (
    <header
      onClick={(e) => {
        console.log(e);
      }}
    >
      <div className="logoGrp">
        <div className="logo">Shortly</div>
        <img
          src={menu}
          alt="hamburger menu"
          className="menu"
          onClick={toggleClass}
        />
      </div>

      <motion.nav
        className="navBar showNav"
        ref={menuRef}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        transition="animation"
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.5, type: "tween" }}
      >
        <div className="navbarItems">
          <ul className="navList">
            <li className="navText">
              <a href="#" className="navLink">
                Features
              </a>
            </li>
            <li className="navText">
              <a href="#" className="navLink">
                Pricing
              </a>
            </li>
            <li className="navText">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
          </ul>

          <div className="loginGrp">
            <button className="text-white lg:text-slate-400 hover:scale-110 transition ease-in-out duration-200">
              Login
            </button>

            <button className="bg-cyan px-6 py-2 rounded-3xl text-white hover:scale-110 hover:bg-lightCyan transition ease-in-out duration-200">
              Sign up
            </button>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
