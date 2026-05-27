import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Impact from "../components/Impact";
import ProgramsPreview from "../components/ProgramsPreview";
import StoriesPreview from "../components/StoriesPreview";
import VolunteerCTA from "../components/VolunteerCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <Impact />
      <ProgramsPreview />
      <StoriesPreview />
      <VolunteerCTA />
      <Footer />
    </>
  );
}

export default Home;
