import classes from "./ProjectNavbar.module.scss";

const ProjectNavbar = () => {
    return <nav className={classes.navbar}>
        <ul className={classes.navbar__list}>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About me</a></li>
            <li><a href="/#about">Skills</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact me</a></li>
        </ul>
    </nav>
};

export default ProjectNavbar;