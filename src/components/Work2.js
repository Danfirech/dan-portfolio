import React from "react";
import { useState } from "react";
import WorkPage from "../pages/WorkPage";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { WorkbarLink } from "../styles/Navbar.style";

import {
  WorkPageContainer,
  WorkLeftContainer,
  WorkCenterContainer,
  WorkRightContainer,
  Divider,
  WorkTop,
  WorkCenter,
  WorkBottom,
  CardBox,
  WorkText,
} from "../styles/Work.style";
import { DansButton } from "../styles/ButtonOne.Style";

function ProfilePic() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <WorkPageContainer>
      {/* LEFT CONTAINER */}

      <WorkLeftContainer></WorkLeftContainer>
      {/* <Divider /> */}

      {/* CENTER CONTAINER */}

      <WorkCenterContainer>
        <CardBox>
          <WorkTop>
            <FaReact color="Blue" fontSize="2.5em" />
            <DiJavascript color="#f7df1e" fontSize="2.5em" />
            <SiJavascript color="#f7df1e" fontSize="2.5em" />
            <AiOutlineConsoleSql color="#f7df1e" fontSize="2.5em" />
          </WorkTop>
          <WorkCenter>
            <h4 style={{ fontSize: 25 }}>
              This will be a short paragraph that describes <br /> what type of
              projects I have created.
            </h4>
          </WorkCenter>
          <WorkBottom>
            <WorkbarLink to="/work">Check Out My Projects</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkCenterContainer>
      {/* <Divider /> */}

      {/* RIGHT CONTAINER */}

      <WorkRightContainer></WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
