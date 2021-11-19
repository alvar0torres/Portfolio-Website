//domain.com/crypto-price-tracker

import ProjectNavbar from "../../components/ProjectPage/crypto-price-tracker/Navbar/ProjectNavbar";
import Heading from "../../components/ProjectPage/crypto-price-tracker/Heading/Heading";
import Details from "../../components/ProjectPage/crypto-price-tracker/DetailsSection/Details";
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
