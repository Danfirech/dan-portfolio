import React from "react";
import { useState } from "react";
import WorkPage from "../pages/WorkPage";

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
            {/* <FaReact color="Blue" fontSize="2.5em" />
            <DiJavascript color="#f7df1e" fontSize="2.5em" />
            <SiJavascript color="#f7df1e" fontSize="2.5em" />
            <AiOutlineConsoleSql color="#f7df1e" fontSize="2.5em" /> */}
            <img src="https://img.icons8.com/material-rounded/24/000000/code.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/html-5--v2.png" />
            <img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/000000/external-css-software-development-soft-fill-soft-fill-juicy-fish.png" />
            <img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/000000/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png" />
            <img src="https://img.icons8.com/cute-clipart/43/000000/react-native.png" />

            <img src="https://img.icons8.com/fluency-systems-regular/24/000000/code.png" />
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
