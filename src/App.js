import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />

      {/* <section className="h-screen flex justify-center items-center">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
