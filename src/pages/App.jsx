import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Album from "./album/Album";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import NoMatch from "./nomatch";
import Contact from "./contact/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/album/:id"  element={<Album/>} />
        <Route path="/about" element={<About  />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
