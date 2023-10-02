import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Skill from 'components/Skill';
import Projects from 'pages/Project';
import Contact from 'components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
    <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
           <Route path="/project" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
