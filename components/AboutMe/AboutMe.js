import Link from 'next/link'

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
                Krakow and {"I'm"} specially focused in the development of
                <strong> web applications </strong>
                with <strong>React</strong> and <strong>Next.js.</strong>
              </p>
              <p className={classes["about__content-details-para"]}>
                I consider myself to be a <strong>fast learner</strong> and I
                really enjoy the process of acquiring{" "}
                <strong>new skills</strong> and discovering
                <strong> new technologies. </strong>
                Also, I have a wide range of <strong>soft skills</strong> that I
                have gained during my experience in previous positions.
              </p>
              <p className={classes["about__content-details-para"]}>
                You can download my CV{" "}
                <Link href="/CV-Alvaro-Nov2021.pdf" download>
                  <strong className={classes.cv}>here.</strong>
                </Link>
              </p>
            </div>
            <a href="/#contact">
              <button className={classes.button}>CONTACT</button>
            </a>
          </div>

          <div id="skills" className={classes["about__content-skills"]}>
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
              <div className={classes["skills__skill"]}>REST API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
