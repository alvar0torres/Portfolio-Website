import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes["section-container"]}>
        <div className={classes.details__imgContainer}>
          <img
            src="/gravity_laptop.jpg"
            alt="Software Screenshot"
            className={classes.details__img}
            loading="lazy"
          />
        </div>

        <div className={classes.info}>
          <div>
            <div>
              <h3 className={classes.info__title}>Gravity</h3>
              <p className={classes.info__description}>
                It calculates how much you would weight on other planets of the
                Solar System.
              </p>
              <p className={classes.info__description}>
                These are the functionalities/features:
              </p>
              <div>
                <ul className={classes.info__description}>
                  <li>Calculate how much your weight is on other planets.</li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Current planets available are:</li>
                  <li style={{ listStyle: "none" }}>
                    <ul className={classes.info__description}>
                      <li>Mercury</li>
                      <li>Venus</li>
                      <li>The Moon</li>
                      <li>Mars</li>
                      <li>Jupiter</li>
                      <li>Saturn</li>
                      <li>Uranus</li>
                      <li>Neptune</li>
                      <li>Earth</li>
                    </ul>
                  </li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Full responsive design</li>
                </ul>
                <ul className={classes.info__description}>
                  <li>Tests: I have tested the following (tests are in App.test.js):</li>
                  <li style={{ listStyle: "none" }}>
                    <ul className={classes.info__description}>
                      <li>Tested that calculations are correct for every displayed planet</li>
                      <li>Tested that error message is displayed if not a valid number is entered in the input</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.tool_section}>
              <h3 className={classes.info__title}>Tools Used</h3>
              <div className={classes.tools}>
                <div className={classes.tool}>HTML</div>
                <div className={classes.tool}>CSS</div>
                <div className={classes.tool}>JavaScript</div>
                <div className={classes.tool}>React</div>
                <div className={classes.tool}>React Testing Library</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gravity-react.vercel.app/"
              >
                <button className={classes.button_live_sm}>LIVE LINK</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alvar0torres/Gravity"
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
