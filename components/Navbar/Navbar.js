import { useState } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [backdropClass, setBackDropClass] = useState(classes["backdrop-close"]);
  const [drawerClass, setDrawerClass] = useState(
    classes["navbar-mobile-closed"]
  );

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
            <Link href="/#home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact me</a>
            </Link>
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
              <Link href="/#home">
                <div onClick={closeMenuHandler}>Home</div>
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <Link href="/#about">
                <div onClick={closeMenuHandler}>About me</div>
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <Link href="/#skills">
                <div onClick={closeMenuHandler}>Skills</div>
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <Link href="/#projects">
                <div onClick={closeMenuHandler}>Projects</div>
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li className={classes["navbar-mobile__list__item"]}>
              <Link href="/#contact">
                <div onClick={closeMenuHandler}>Contact me</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
