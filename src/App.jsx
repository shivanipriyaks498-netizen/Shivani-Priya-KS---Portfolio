import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Training from "./sections/Training";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Training />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
