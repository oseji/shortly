import menu from "./assets/menu.png";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="logoAndNavList">
        <div className="logoGrp">
          <div className="logo">Shortly</div>
          <img src={menu} alt="hamburger menu" className="menu" />
        </div>

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
      </div>

      <div className="loginGrp">
        <button className="text-Gray hover:scale-110 transition ease-in-out duration-200">
          Login
        </button>
        <button className="bg-cyan px-6 py-2 rounded-3xl text-white hover:scale-110 hover:bg-lightCyan transition ease-in-out duration-200">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
