import React from "react";
import { Image } from "../styles/ProfilePic.style";

import Rami from "../components/images/Rami.png";

import {
  LeftContainer,
  RightContainer,
  CenterContainer,
  AboutMeText,
} from "../styles/AboutMe.Style";

function AboutMe() {
  return (
    <>
      <LeftContainer>
        <Image style={{ paddingTop: 270 }} src={Rami} />
      </LeftContainer>
      <RightContainer>
        <AboutMeText>
          <h1 style={{ fontSize: 15, paddingTop: 250 }}>
            There are a number of reasons you may need a block of text and when
            you do, a random paragraph can be the perfect solution. If you
            happen to be a web designer and you need some random text to show in
            your layout, a random paragraph can be an excellent way to do this.
            If you're a programmer and you need random text to test the program,
            using these paragraphs can be the perfect way to do this. Anyone
            who's in search of realistic text for a project can use one or more
            of these random paragraphs to fill their need.
          </h1>
        </AboutMeText>
      </RightContainer>
    </>
  );
}

export default AboutMe;
