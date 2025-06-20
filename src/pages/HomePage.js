import Main from "../components/Main";
import { HeroSection } from "../components/subComponents.js/HeroSection";
import { SpecialsSection } from "../components/subComponents.js/SpecialsSection";
import { Testimonials } from "../components/subComponents.js/Tesimonials";
import { About } from "../components/subComponents.js/About";


const HomePage = () => {
    return (
        <Main>
            <HeroSection />
            <SpecialsSection />
            <Testimonials />
            <About />
        </Main>
    )
}

export default HomePage
