import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>CRYPTO PRICE TRACKER</h1>
        <div className={classes.heading__description}>
          Web application that displays cryptocurrency prices and charts in real
          time thanks to the Coingecko API.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://crypto-api-price-tracker.vercel.app/"
        >
          <button className={classes.button}>LIVE LINK</button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
