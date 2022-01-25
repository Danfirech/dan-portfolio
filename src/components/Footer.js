import React from "react";
import {
  FooterContainer,
  FooterCenterContainer,
  FooterRightContainer,
  FooterLeftContainer,
} from "../styles/Footer.style";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeftContainer>
          <h1 style={{ fontSize: 15 }}>DanPossehlDesign</h1>
          <h1 style={{ fontSize: 15 }}>2022</h1>
        </FooterLeftContainer>
        <FooterCenterContainer>
          <h1>
            <a
              href="https://www.linkedin.com/in/daniel-possehl-a2aa24b4/"
              target="https://www.linkedin.com/in/daniel-possehl-a2aa24b4/"
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
            </a>
          </h1>
          <h1>
            <a
              href="https://github.com/Danfirech"
              target="https://github.com/Danfirech"
            >
              <img src="https://img.icons8.com/ios-glyphs/55/000000/github.png" />
            </a>
          </h1>
        </FooterCenterContainer>
        <FooterRightContainer>
          <h1 style={{ fontSize: 15 }}>DanielPossehl@hotmail.com</h1>
          <h1 style={{ fontSize: 15 }}>616-821-0139</h1>
        </FooterRightContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
