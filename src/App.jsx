import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen w-full overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/About" element = {<About/>}/>
          <Route path="/Experience" element = {<Experience/>}/>
          <Route path="/Projects" element = {<Projects/>}/>
          <Route path="/Contact" element = {<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
