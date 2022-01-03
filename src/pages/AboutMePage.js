import Navbar from "../components/NavBar";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestComponent from "../components/TestContainer";

function AboutMe() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <TestComponent />
      </div>
    </>
  );
}

export default AboutMe;
