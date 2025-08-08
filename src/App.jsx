import { useState } from "react";
import SEO from "./components/SEO/SEO";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="App">
      <SEO
        title="Perforaciones Cucchietti - Especialistas en Perforaciones Mecánicas"
        description="Perforación para colocación de cable y electrodo, medición y certificación de puesta tierra en Buenos Aires y CABA"
        keywords="perforaciones, mecánicas, electrodo, puesta a tierra, Buenos Aires, CABA, certificación"
      />
      <Header toggleSection={toggleSection} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
