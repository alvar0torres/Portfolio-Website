import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.projects__title}>PROJECTS</h1>
          <div className={classes.separator}></div>
          <span className={classes.projects__description}>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
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
            <div class="projects__row-content">
              <h3 className={classes.project_title}>Car-Auctions</h3>
              <p className={classes.project_description}>
                Web application that allows users to buy and sell cars by using
                an auctions system together with a bunch of other features.
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://car-auctions.vercel.app/">
                <button className={classes.button}>LIVE VERSION</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
