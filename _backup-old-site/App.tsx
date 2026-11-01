import Header from "./components/Header";
import Hero from "./components/HeroSection";
import About from "./components/About";
import Music from "./components/Music";
import Videos from "./components/Videos/Videos";
import { Element } from "react-scroll";
import Footer from "./components/Footer";
import "./App.css";
import Photos from "./components/Photos";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="music">
        <Music />
      </Element>
      <Element name="videos">
        <Videos />
      </Element>
      <Element name="photos">
        <Photos />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
