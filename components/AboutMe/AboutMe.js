import Link from "next/link";
import Skills from "./Skills/Skills";

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
                {"I'm"} a <strong> Frontend Web Developer </strong> specially
                focused in the development of
                <strong> web applications </strong>
                with frameworks such as <strong>Angular</strong> and{" "}
                <strong>React.</strong>
                {" "}On top of that I have some backend experience with <strong>Node.js.</strong>
              </p>
              <p className={classes["about__content-details-para"]}>
                I consider myself to be a <strong>fast learner</strong> and I
                really enjoy the process of acquiring{" "}
                <strong>new skills</strong> and discovering
                <strong> new technologies. </strong>
                Also, I have a wide range of <strong>soft skills</strong> that I
                have gained during my experience in previous positions.
              </p>
            </div>
            <Link href="/#contact">
              <button className={classes.button}>CONTACT</button>
            </Link>
          </div>

          <div id="skills" className={classes["about__content-skills"]}>
            <h3 className={classes["about__content-title"]}>My Skills</h3>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
