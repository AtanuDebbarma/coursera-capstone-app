import Main from "../components/Main";
import { HeroSection } from "../components/subComponents.js/HeroSection";
import { SpecialsSection } from "../components/subComponents.js/SpecialsSection";
import { Testimonials } from "../components/subComponents.js/Tesimonials";
import { About } from "../components/subComponents.js/About";

/**
 * HomePage component serves as the main landing page of the application.
 * It includes several sections: HeroSection, SpecialsSection, Testimonials,
 * and About, wrapped within the Main component.
 *
 * This component is responsible for rendering the key sections of the homepage
 * to provide users with an overview of the restaurant, its special offerings,
 * customer testimonials, and background information.
 */
const HomePage = () => {
  return (
    <Main>
      <HeroSection />
      <SpecialsSection />
      <Testimonials />
      <About />
    </Main>
  );
};

export default HomePage;
