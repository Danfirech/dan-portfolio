import React from "react";
import {
  FooterContainerTwo,
  FooterCenterContainerTwo,
  FooterRightContainerTwo,
  FooterLeftContainerTwo,
} from "../styles/FooterTwo.style";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function FooterTwo() {
  return (
    <>
      <FooterContainerTwo>
        <FooterLeftContainerTwo>
          <h1 style={{ fontSize: 15 }}>DanPossehlDesign</h1>
          <h1 style={{ fontSize: 15 }}>202222222222222</h1>
        </FooterLeftContainerTwo>
        <FooterCenterContainerTwo>
          <h1>
            <BsLinkedin />
          </h1>
          <h1>
            <BsGithub />
          </h1>
          <h1>
            <BsFacebook />
          </h1>
        </FooterCenterContainerTwo>
        <FooterRightContainerTwo>
          <h1 style={{ fontSize: 15 }}>DanielPossehl@hotmail.com</h1>
          <h1 style={{ fontSize: 15 }}>616-821-0139</h1>
        </FooterRightContainerTwo>
      </FooterContainerTwo>
    </>
  );
}

export default FooterTwo;
