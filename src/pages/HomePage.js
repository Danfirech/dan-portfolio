import Navbar from "../components/NavBar";

import React from "react";
import Work from "../components/Work";
import ProfilePic from "../components/ProfilePic";
import TextComponent from "../components/TextComponent";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import { Whole } from "../styles/Work.style";
import Work2 from "../components/Work2";

function HomePage() {
  return (
    <>
      <Whole>
        <div>
          <ProfilePic />
          <TextComponent />
          <Work2 />
          <Work />
          <AboutMe />
          <Footer />
        </div>
      </Whole>
    </>
  );
}

export default HomePage;
