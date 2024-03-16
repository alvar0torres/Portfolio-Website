import classes from "./Skills.module.scss";

const Skills = () => {
  const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "Next.js",
    "Redux",
    "NGRX",
    "RxJS",
    "Node.js",
    "MongoDB",
    "GIT",
    "REST API",
    "WebSocket",
    "Jest",
    "Cypress",
    "Open Telemetry",
    "Kibana",
  ];

  return (
    <div className={classes["skills"]}>
      {skillList.map((skill) => (
        <div key="{skill}" className={classes["skills__skill"]}>{skill}</div>
      ))}
    </div>
  );
};

export default Skills;
