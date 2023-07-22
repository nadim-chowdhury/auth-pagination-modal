import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FormValidation from "./components/FormValidation";
import Modal from "./components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center mt-4">
        <button
          type="button"
          className="mt-4 ms-4 btn btn-success"
          onClick={() => setOpen(true)}
        >
          Open Modal
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} />

      {/* <section className="h-screen flex justify-center items-center">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </section> */}

      <FormValidation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}
