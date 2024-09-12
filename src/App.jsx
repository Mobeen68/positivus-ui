import "./App.css";
import CaseStudies from "./components/caseStudies/CaseStudies";
import ContactUs from "./components/contactUs/ContactUs";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import CTA from "./components/services/components/CTA/CTA";
import Services from "./components/services/Services";
import Teams from "./components/teams/Teams";
import Testimonials from "./components/testimonials/Testimonials";
import Working from "./components/workingProcess/Working";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <Working />
      <Teams />
      <Testimonials />
      <ContactUs />
    </>
  );
}

export default App;
