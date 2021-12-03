import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>GRAVITY</h1>
        <div className={classes.heading__description}>
          Would you like to know what you might weight on other planets? Find
          out now...
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gravity-react.vercel.app/"
        >
          <button className={classes.button}>LIVE LINK</button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
