import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <CustomScrollbar />
    </>
  );
}

export default App;