import Cta from "../Components/CTA/Cta";
import SpotLight from "../Components/DeepDrive/SpotLight";
import Faq from "../Components/FAQ/Faq";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Metrics from "../Components/Metrics/Metrics";
import Navber from "../Components/Navber/Navber";
import PricingSection from "../Components/PricingSection/PricingSection";
import Testimonial from "../Components/Testimonial/Testimonial";

const MainSection = () => {
  return (
    <div>
      <Navber></Navber>
      <Hero></Hero>
      <Features></Features>
      <SpotLight></SpotLight>
      <Metrics></Metrics>
      <Testimonial></Testimonial>
      <PricingSection></PricingSection>
      <Faq></Faq>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
};

export default MainSection;
