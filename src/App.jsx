import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Year1 from "./pages/Year1";
import Year2 from "./pages/Year2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Y1ppt from "./pages/Y1ppt";
import Y2ppt from "./pages/Y2ppt";
import Y1ppr from "./pages/Y1ppr";
import Y2ppr from "./pages/Y2ppr";
import Y1sn from "./pages/Y1sn";
import Y2sn from "./pages/Y2sn";

function App() {
  return (
    <Router>
      <div className="main h-full bg-[url('/bg1.svg')] pt-6 px-5">
        {/* Navbar remains constant across all pages */}
        <Navbar />

        {/* Routes handle navigation */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/year1" element={<Year1 />} /> {/* Year 1 page */}
          <Route path="/year2" element={<Year2 />} /> {/* Year 2 page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/year1ppt" element={<Y1ppt/>}/>
          <Route path="/year2ppt" element={<Y2ppt/>}/>
          <Route path="/year1ppr" element={<Y1ppr/>}/>
          <Route path="/year2ppr" element={<Y2ppr/>}/>
          <Route path="/year1sn" element={<Y1sn/>}/>
          <Route path="/year2sn" element={<Y2sn/>}/>
        </Routes>
      </div>
      <Footer /> {/* Footer remains constant across all pages */}
    </Router>
  );
}

export default App;
