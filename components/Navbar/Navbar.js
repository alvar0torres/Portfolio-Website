import classes from "./Navbar.module.scss";

const Navbar = () => {
    return <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact me</li>
        </ul>
    </nav>
};

export default Navbar;