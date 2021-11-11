import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </section>
  );
}
