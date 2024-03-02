import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes["section-container"]}>
        <div className={classes.details__imgContainer}>
          <img
            src="/tic-tac-toe_laptop_mockup.jpg"
            alt="Project Screenshot"
            className={classes.details__img}
            loading="lazy"
          />
        </div>

        <div className={classes.info}>
          <div>
            <div>
              <h3 className={classes.info__title}>Tic-Tac-Toe</h3>
              <p className={classes.info__description}>
                This popular old game does not need presentation. Made with Angular.
              </p>
              <p className={classes.info__description}>
                These are the functionalities/features:
              </p>
              <div>
              <ul className={classes.info__description}>
                  <li>2 Players.</li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Possibility to enter the name of the players.</li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Display modal with the name of the winner player.</li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Full responsive design</li>
                </ul>
              </div>
            </div>
            <div className={classes.tool_section}>
              <h3 className={classes.info__title}>Tools Used</h3>
              <div className={classes.tools}>
                <div className={classes.tool}>HTML</div>
                <div className={classes.tool}>CSS</div>
                <div className={classes.tool}>JavaScript</div>
                <div className={classes.tool}>Angular</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tic-tac-toe-alvar0torres.vercel.app/"
              >
                <button className={classes.button_live_sm}>LIVE LINK</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alvar0torres/tic-tac-toe"
              >
                <button className={classes.button_code}>CODE LINK</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
