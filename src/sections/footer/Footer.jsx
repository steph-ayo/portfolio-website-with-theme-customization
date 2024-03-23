import { links, socials } from "./data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="conatainer footer__container">
        <ul className="nav__menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>{fLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer__copyright">
          <small>2024 Popoola S.A &copy; all rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
