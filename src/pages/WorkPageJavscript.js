import Navbar from "../components/NavBar";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function WorkPageJavascript() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/projects" />
        <Route path="/about" />
      </Routes>
      <ProfilePic />
      <TextComponent />
      <Work />
      <AboutMe />
    </Router>
  );
}

export default WorkPageJavascript;
