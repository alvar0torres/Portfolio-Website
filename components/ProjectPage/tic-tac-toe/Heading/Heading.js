import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>TIC-TAC-TOE</h1>
        <div className={classes.heading__description}>
          The classic game. For 2 Players
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tic-tac-toe-alvar0torres.vercel.app/"
        >
          <button className={classes.button}>LIVE LINK</button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
