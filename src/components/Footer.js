import React from "react";
import {
  FooterContainer,
  FooterCenterContainer,
  FooterRightContainer,
  FooterLeftContainer,
} from "../styles/Footer.Style";
import { CardBox } from "../styles/Footer.Style";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeftContainer>
          <CardBox>
            <h1>DanielPossehl@hotmail.com</h1>
            <h1>616-821-0139</h1>
          </CardBox>
        </FooterLeftContainer>
        <FooterCenterContainer />
        <FooterRightContainer />
      </FooterContainer>
    </>
  );
}

export default Footer;
