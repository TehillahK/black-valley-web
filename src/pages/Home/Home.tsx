import ContactUs from "../../components/ContactUs";
import CompensationHero from "./components/CompensationHero";
import FeaturesHero from "./components/FeaturesHero";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroHero from "./components/IntroHero";
import RequirementsHero from "./components/RequirementsHero";

const HomePage = () => {
  return (
    <div className="text-white">
      <Header />
      <IntroHero />
      <FeaturesHero />
      <RequirementsHero />
      <CompensationHero />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
