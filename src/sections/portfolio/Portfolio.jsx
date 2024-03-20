import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check some of the projects I recently worked on for my clients. Use the
        butoons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
