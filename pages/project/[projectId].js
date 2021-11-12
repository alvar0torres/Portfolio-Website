//domain.com/projectId

import ProjectNavbar from "../../components/ProjectPage/Navbar/ProjectNavbar";
import Heading from "../../components/ProjectPage/Heading/Heading";
import Details from "../../components/ProjectPage/DetailsSection/Details";
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
