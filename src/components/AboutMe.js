import React from "react";
import { Image2 } from "../styles/ProfilePic.style";

import Rami from "../components/images/Rami.png";

import {
  AboutMeContainer,
  LeftContainer,
  RightContainer,
  CenterContainer,
} from "../styles/AboutMe.Style";

function AboutMe() {
  return (
    <>
      <AboutMeContainer>
        <LeftContainer>
          <Image2 src={Rami} />
        </LeftContainer>
        <RightContainer>
          <h1
            style={{
              fontSize: 15,
              paddingTop: 80,
              color: "white",
              paddingRight: 200,
              paddingLeft: 300,
            }}
          >
            There are a number of reasons you may need a block of text and when
            you do, a random paragraph can be the perfect solution. If you
            happen to be a web designer and you need some random text to show in
            your layout, a random paragraph can be an excellent way to do this.
            If you're a programmer and you need random text to test the program,
            using these paragraphs can be the perfect way to do this. Anyone
            who's in search of realistic text for a project can use one or more
            of these random paragraphs to fill their need.
          </h1>
        </RightContainer>
      </AboutMeContainer>
    </>
  );
}

export default AboutMe;
