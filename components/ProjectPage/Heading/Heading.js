import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.grid}>
        <h1 className={classes.heading__title}>PROJECT X</h1>
        <div className={classes.heading__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          in numquam incidunt earum quaerat cum fuga, atque similique natus
          nobis sit.
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
