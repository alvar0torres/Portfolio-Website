import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImCircleDown } from "react-icons/im";

import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="home" className={classes.heroSection}>
      <div className={classes.overlay}>
        <div className={classes.content_area}>
          <div className={classes.heroSection__card}>
            <h1 className={classes.main_title}>{"I'm"} Alvaro Torres.</h1>
            <h4 className={classes.main_text}>
              {"I’m"} passionate about JavaScript and all the web technologies that
              surround it. {"I’m"} currently looking for the right opportunity to
              work in an environment that will allow me to apply my knowledge in
              real-world projects.
            </h4>
            <div className={classes.external_links}>
              <Link
                href="https://github.com/alvar0torres"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={classes.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alvaro-torres-valderrama-001095198/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className={classes.icon} />
              </Link>
            </div>
          </div>
          <Link href="#about">
            <ImCircleDown className={classes.down_icon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
