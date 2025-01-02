import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Buy from "./components/Buy";
import About from "./components/About";
import Toys from "./components/Toys";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Toys />
      <Buy />
      <Reviews />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default App;