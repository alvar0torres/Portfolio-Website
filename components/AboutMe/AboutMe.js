import classes from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.about__title}>ABOUT ME</h1>
          <div className={classes.separator}></div>
          <span className={classes.about__description}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </div>
        <div className={classes.about__content}>
          <div className={classes["about__content-main"]}>
            <h3 className={classes["about__content-title"]}>Get to know me!</h3>
            <div className={classes["about__content-details"]}>
              <p className={classes["about__content-details-para"]}>
                Hey! {"It's"}
                <strong> Alvaro Torres. </strong>
                {"I'm"} a <strong> Frontend Web Developer </strong> located in
                Cracow and {"I'm"} am specialized in the development of
                <strong> web applications </strong>
                with React and Next.js.
              </p>
              <p className={classes["about__content-details-para"]}>
                I write <strong>clean code</strong> and I genuinely love to
                learn. {"I'm"} currently seeking for a{" "}
                <strong>frontend engineer</strong> position, but would like to
                get the chance to progress into full stack role as I gain more
                experience.
              </p>
            </div>
            <button href="./#contact" className={classes.button}>
              CONTACT
            </button>
          </div>

          <div className={classes["about__content-skills"]}>
            <h3 className={classes["about__content-title"]}>My Skills</h3>
            <div className={classes["skills"]}>
              <div className={classes["skills__skill"]}>HTML</div>
              <div className={classes["skills__skill"]}>CSS</div>
              <div className={classes["skills__skill"]}>JavaScript</div>
              <div className={classes["skills__skill"]}>React</div>
              <div className={classes["skills__skill"]}>Redux</div>
              <div className={classes["skills__skill"]}>Next.js</div>
              <div className={classes["skills__skill"]}>SASS</div>
              <div className={classes["skills__skill"]}>GIT</div>
              <div className={classes["skills__skill"]}>Firebase</div>
              <div className={classes["skills__skill"]}>MongoDB</div>
              <div className={classes["skills__skill"]}>Algorithms</div>
              <div className={classes["skills__skill"]}>Data Structures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
