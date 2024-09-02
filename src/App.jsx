import "./App.css";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import CTA from "./components/services/components/CTA/CTA";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
    </>
  );
}

export default App;
