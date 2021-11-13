import classes from "./Details.module.scss";

const Details = () => {
  return (
    <section className={classes.details}>
      <div className={classes.container}>
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
            <div className={classes.text_section}>
              <h3 className={classes.info__title}>Project X</h3>
              <p className={classes.info__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Neque alias tenetur minus quaerat
                aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                ullam rem?
              </p>
              <p className={classes.info__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem?
              </p>
            </div>
            <div className={classes.tool_section}>
              <h3 className={classes.info__title}>Tools Used</h3>
              <div className={classes.tools}>
                <div className={classes.tool}>HTML</div>
                <div className={classes.tool}>CSS</div>
                <div className={classes.tool}>JavaScript</div>
                <div className={classes.tool}>React</div>
                <div className={classes.tool}>SASS</div>
                <div className={classes.tool}>GIT</div>
                <div className={classes.tool}>Shopify</div>
                <div className={classes.tool}>Wordpress</div>
                <div className={classes.tool}>Google ADS</div>
                <div className={classes.tool}>Facebook Ads</div>
                <div className={classes.tool}>Android</div>
                <div className={classes.tool}>IOS</div>
              </div>
            </div>
            <div className={classes.see_live}>
              <h3 className={classes.info__title}>See Live</h3>
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
