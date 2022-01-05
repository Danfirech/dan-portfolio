import React from "react";
import {
  FooterContainer,
  FooterCenterContainer,
  FooterRightContainer,
  FooterLeftContainer,
} from "../styles/Footer.Style";
import { CardBox } from "../styles/Footer.Style";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeftContainer>
          <CardBox>
            <h1>DanPossehlDesign</h1>
            <h1>2021</h1>
          </CardBox>
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
          <CardBox>
            <h1>DanielPossehl@hotmail.com</h1>
            <h1>616-821-0139</h1>
          </CardBox>
        </FooterRightContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
