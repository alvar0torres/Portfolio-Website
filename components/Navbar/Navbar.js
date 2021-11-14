import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import classes from "./Navbar.module.scss";

const Navbar = () => {
    const [backdropClass, setBackDropClass] = useState(classes["backdrop-close"]);
    const [drawerClass, setDrawerClass] = useState(classes["navbar-mobile-closed"]);

    const openMenuHandler = () => {
        setBackDropClass(classes["backdrop-open"]);
        setDrawerClass(classes["navbar-mobile-open"]);
    };

    const closeMenuHandler = () => {
        setBackDropClass(classes["backdrop-closed"]);
        setDrawerClass(classes["navbar-mobile-closed"]);
    };

  return (
    <section>
      <div onClick={closeMenuHandler} className={backdropClass}></div>
      <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About me</a>
          </li>
          <li>
            <a href="/#about">Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact me</a>
          </li>
        </ul>
      </nav>
      <header className={classes["header-mobile"]}>
        <MenuIcon
          fontSize="large"
          className={classes["navbar-mobile__hamburger"]}
          onClick={openMenuHandler}
        />

        <nav className={drawerClass}>
          <ul className={classes["navbar-mobile__list"]}>
            <li className={classes["navbar-mobile__list__item"]}>
              <a onClick={closeMenuHandler} href="/#home">Home</a>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <a onClick={closeMenuHandler} href="/#about">About me</a>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <a onClick={closeMenuHandler} href="/#about">Skills</a>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <a onClick={closeMenuHandler} href="/#projects">Projects</a>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <a onClick={closeMenuHandler} href="/#contact">Contact me</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
