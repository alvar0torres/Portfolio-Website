import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes["section-container"]}>
        <div className={classes.details__imgContainer}>
          <img
            src="/car-auctions-mockup.jpg"
            alt="Software Screenshot"
            className={classes.details__img}
            loading="lazy"
          />
        </div>

        <div className={classes.info}>
          <div>
            <div>
              <h3 className={classes.info__title}>Car-Auctions</h3>
              <p className={classes.info__description}>
                Web application that allows users to buy and sell cars by using
                an auctions system together with a bunch of other features.
              </p>
              <p className={classes.info__description}>
                These are the functionalities/features of this web application:
              </p>
              <ul className={classes.info__description}>
                <li>Full Responsive</li>
                <li>Login/Logout</li>
                <li>Auto-Logout after 1h session</li>
                <li>Create car auctions</li>
                <li>Place bids on existing auctions</li>
                <li>Add auction to favourites</li>
                <li>
                  The remaining time for each auction is displayed in real time
                </li>
                <li>
                  When an auction ends, the name of the user that placed the
                  last bid is displayed as a winner
                </li>
                <li>Filtering of results by auction state and price range</li>
                <li>Contact us form</li>
              </ul>
            </div>
            <div className={classes.tool_section}>
              <h3 className={classes.info__title}>Tools Used</h3>
              <div className={classes.tools}>
                <div className={classes.tool}>HTML</div>
                <div className={classes.tool}>CSS</div>
                <div className={classes.tool}>JavaScript</div>
                <div className={classes.tool}>React</div>
                <div className={classes.tool}>Redux</div>
                <div className={classes.tool}>Next.js</div>
                <div className={classes.tool}>Firebase</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>
              <div className={classes.info__description}>
                <strong>NOTE:</strong> You can use the following credentials if
                you do not have time to create an account:
                <ul>
                  <li>
                    <strong>Email:</strong> testuser@email.com
                  </li>
                  <li>
                    <strong>Password:</strong> 123456
                  </li>
                </ul>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://car-auctions.vercel.app/"
              >
                <button className={classes.button_live_sm}>LIVE LINK</button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alvar0torres/Car-Auctions"
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
