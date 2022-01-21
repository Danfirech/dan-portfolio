import React from "react";
import {
  FooterContainer,
  FooterCenterContainer,
  FooterRightContainer,
  FooterLeftContainer,
} from "../styles/Footer.Style";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeftContainer>
          <h1 style={{ fontSize: 15 }}>DanPossehlDesign</h1>
          <h1 style={{ fontSize: 15 }}>2021</h1>
        </FooterLeftContainer>
        <FooterCenterContainer>
          <h1>
            <BsLinkedin />
          </h1>
          <h1>
            <BsGithub />
          </h1>
          <h1>
            <BsFacebook />
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
