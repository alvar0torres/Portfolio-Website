import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>CAR-AUCTIONS</h1>
        <div className={classes.heading__description}>
          Web application made with React and Next.js that allows users to buy
          and sell cars by using an auctions system.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://car-auctions.vercel.app/"
        >
          <button className={classes.button}>LIVE LINK</button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
