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
          <h1 style={{ fontSize: 15 }}>2022</h1>
        </FooterLeftContainerTwo>
        <FooterCenterContainerTwo>
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
