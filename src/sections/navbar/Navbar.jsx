import logo from "../../assets/logo.jpg";
import data from "./data";
import "./navbar.css";
import { IoColorPalette } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt="logo"></img>
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <IoColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
