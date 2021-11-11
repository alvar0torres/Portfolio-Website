

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
                Hey! It's
                <strong> Alvaro Torres </strong>
                and I'm a <strong> Frontend Web Developer </strong> located in
                Cracow. I've done
                <strong> remote </strong>
                projects for agencies, consulted for startups, and collaborated
                with talented people to create
                <strong> digital products </strong>
                for both business and consumer use.
              </p>
              <p className={classes["about__content-details-para"]}>
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Feel free to
                <strong> contact </strong>me here.
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
              <div className={classes["skills__skill"]}>SASS</div>
              <div className={classes["skills__skill"]}>GIT</div>
              <div className={classes["skills__skill"]}>Shopify</div>
              <div className={classes["skills__skill"]}>Wordpress</div>
              <div className={classes["skills__skill"]}>Google ADS</div>
              <div className={classes["skills__skill"]}>Facebook Ads</div>
              <div className={classes["skills__skill"]}>Android</div>
              <div className={classes["skills__skill"]}>IOS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
