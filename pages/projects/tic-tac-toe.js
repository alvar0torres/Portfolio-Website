//domain.com/tic-tac-toe

import ProjectNavbar from "../../components/ProjectPage/shared/projectNavbar/ProjectNavbar";
import Heading from "../../components/ProjectPage/tic-tac-toe/Heading/Heading";
import Details from "../../components/ProjectPage/tic-tac-toe/DetailsSection/Details";
import Footer from "../../components/Footer/Footer";

const ProjectPage = () => {
  return (
    <section>
      <ProjectNavbar />
      <Heading />
      <Details />
      <Footer />
    </section>
  );
};

export default ProjectPage;