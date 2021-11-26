import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>FISZKI ONLINE</h1>
        <div className={classes.heading__description}>
          Learn Spanish with the Fiszki flashcards (for Polish speakers).
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fiszki-online.vercel.app/"
        >
          <button className={classes.button}>LIVE LINK</button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
