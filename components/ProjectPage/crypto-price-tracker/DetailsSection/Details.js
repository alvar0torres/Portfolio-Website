import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes["section-container"]}>
        <div className={classes.details__imgContainer}>
          <img
            src="/crypto_tracker_mockup.jpg"
            alt="Software Screenshot"
            className={classes.details__img}
            loading="lazy"
          />
        </div>

        <div className={classes.info}>
          <div>
            <div>
              <h3 className={classes.info__title}>Crypto Price Tracker</h3>
              <p className={classes.info__description}>
                Web application that displays cryptocurrency prices and charts
                in real time thanks to the Coingecko API.
              </p>
              <p className={classes.info__description}>
                These are the functionalities/features:
              </p>
              <div>
                <ul className={classes.info__description}>
                  <li>
                    Display a cryptocurrency table with the following data:
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <ul className={classes.info__description}>
                      <li>Name of the cryptocurrency</li>
                      <li>Price</li>
                      <li>Price change in the last 24h</li>
                      <li>Market Cap</li>
                    </ul>
                  </li>
                </ul>
                <ul className={classes.info__description}>
                  <li>
                    When clicking in a particular cryptocurrency row, the
                    following is displayed:
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <ul className={classes.info__description}>
                      <li>Description of the cryptocurrency</li>
                      <li>Price chart</li>
                    </ul>
                  </li>
                </ul>
                <ul className={classes.info__description}>
                  <li>The price chart can display data from:</li>
                  <li style={{ listStyle: "none" }}>
                    <ul className={classes.info__description}>
                      <li>Last 24h</li>
                      <li>Last 30 days</li>
                      <li>Last 3 months</li>
                      <li>Last year</li>
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
                <div className={classes.tool}>React Router</div>
                <div className={classes.tool}>Axios</div>
                <div className={classes.tool}>React Charts.js</div>
                <div className={classes.tool}>Coingecko API</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://crypto-api-price-tracker.vercel.app/"
              >
                <button className={classes.button_live_sm}>LIVE LINK</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alvar0torres/crypto-price-tracker"
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
