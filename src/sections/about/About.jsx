import { MdOutlineFileDownload } from "react-icons/md";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import Card from "../../components/Card";
import data from "./data";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="/" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            amet enim pariatur fuga veritatis ea suscipit porro neque
            consequatur minima nam mollitia corrupti id ipsam eligendi odit,
            possimus at nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            iusto aperiam minus dicta repellendus? Dignissimos nostrum, facilis
            est neque inventore quasi. Culpa, adipisci quod commodi quas qui vel
            totam iure?
          </p>
          <a href={CV} download className="btn primary">
            Download CV <MdOutlineFileDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
