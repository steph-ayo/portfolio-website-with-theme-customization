import logo from "../../assets/logo.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container"></div>
      <a href="/">
        <img src={logo} alt="logo"></img>
      </a>
      <ul></ul>
      <button></button>
    </nav>
  );
};

export default Navbar;
