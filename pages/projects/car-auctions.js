//domain.com/car-auctions

import ProjectNavbar from "../../components/ProjectPage/car-auctions/Navbar/ProjectNavbar";
import Heading from "../../components/ProjectPage/car-auctions/Heading/Heading";
import Details from "../../components/ProjectPage/car-auctions/DetailsSection/Details";
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
