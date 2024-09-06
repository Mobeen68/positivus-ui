import "./App.css";
import CaseStudies from "./components/caseStudies/CaseStudies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import CTA from "./components/services/components/CTA/CTA";
import Services from "./components/services/Services";
import Teams from "./components/teams/Teams";
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
    </>
  );
}

export default App;
