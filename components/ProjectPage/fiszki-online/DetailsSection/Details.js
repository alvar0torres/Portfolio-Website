import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes["section-container"]}>
        <div className={classes.details__imgContainer}>
          <img
            src="/fiszki_mockup.jpg"
            alt="Software Screenshot"
            className={classes.details__img}
            loading="lazy"
          />
        </div>

        <div className={classes.info}>
          <div>
            <div>
              <h3 className={classes.info__title}>Fiszki Online</h3>
              <p className={classes.info__description}>
                Learn Spanish with the Fiszki flashcards (for Polish speakers).
              </p>
              <p className={classes.info__description}>
                These are the functionalities/features:
              </p>
              <div>
                <ul className={classes.info__description}>
                  <li>
                    Learn Spanish with the Fiski flashcards: on the front of the
                    flashcard you will see Polish language, but if you click on
                    the card, it will turn around and will show you the meaning
                    in Spanish.
                  </li>
                  <li>
                    Different levels: you can choose easy, medium or advanced
                    levels.
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.tool_section}>
              <h3 className={classes.info__title}>Tools Used</h3>
              <div className={classes.tools}>
                <div className={classes.tool}>HTML</div>
                <div className={classes.tool}>CSS/SCSS</div>
                <div className={classes.tool}>JavaScript</div>
                <div className={classes.tool}>React</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fiszki-online.vercel.app/"
              >
                <button className={classes.button_live_sm}>LIVE LINK</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alvar0torres/Fiszki-Online"
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
