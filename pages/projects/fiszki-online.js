//domain.com/fiszki-online

import ProjectNavbar from "../../components/ProjectPage/shared/projectNavbar/ProjectNavbar";
import Heading from "../../components/ProjectPage/fiszki-online/Heading/Heading";
import Details from "../../components/ProjectPage/fiszki-online/DetailsSection/Details";
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
