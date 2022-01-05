import Navbar from "../components/NavBar";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "../components/Work";
import ProfilePic from "../components/ProfilePic";
import TextComponent from "../components/TextComponent";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div>
        <ProfilePic />
        <TextComponent />
        <Work />
        <AboutMe />
      </div>
    </>
  );
}

export default HomePage;
