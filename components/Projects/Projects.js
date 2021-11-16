import Link from "next/link";

import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.projects__title}>PROJECTS</h1>
          <div className={classes.separator}></div>
          <span className={classes.projects__description}>
            Here you will find some of the personal projects that I created with
            each project containing its own explanation of features and link to
            the live version.
          </span>
        </div>

        <div className={classes.projects__content}>
          <div className={classes.projects__row}>
            <div className={classes["projects__row-img-cont"]}>
              <img
                src="/car-auctions-mockup.jpg"
                alt="Software Screenshot"
                className={classes["projects__row-img"]}
                loading="lazy"
              />
            </div>
            <div>
              <h3 className={classes.project_title}>Car-Auctions</h3>
              <p className={classes.project_description}>
                Web application that allows users to buy and sell cars by using
                an auctions system together with a bunch of other features.
              </p>
              <Link href="/projects/car-auctions">
                <button className={classes.button}>MORE INFO</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
