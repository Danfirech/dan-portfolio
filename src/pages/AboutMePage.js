import Navbar from "../components/NavBar";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestComponent from "../components/TestContainer";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <div>
        <TestComponent />
      </div>
    </>
  );
}

export default AboutMe;
