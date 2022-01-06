import React from "react";
import { useState } from "react";
import WorkPage from "../pages/WorkPage";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
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

      <WorkLeftContainer>
        <CardBox>
          <WorkTop>
            <WorkText>
              <SiJavascript color="yellow" fontSize="2.5em" />
            </WorkText>
          </WorkTop>
          <WorkCenter>
            <h4 style={{ color: "#011936ff", fontSize: 25 }}>
              This will be a short paragraph that describes <br /> what type of
              projects I have created.
            </h4>
          </WorkCenter>
          <WorkBottom>
            {/* <DansButton onClick={() => setIsToggled(!isToggled)}>
              Check it out
            </DansButton>
            {isToggled && <JavascriptPage />} */}
            <WorkbarLink to="/js">Javasript</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkLeftContainer>
      <Divider />

      {/* CENTER CONTAINER */}

      <WorkCenterContainer>
        <CardBox>
          <WorkTop>
            <FaReact color="Blue" fontSize="2.5em" />
          </WorkTop>
          <WorkCenter>
            <h4 style={{ fontSize: 25 }}>
              This will be a short paragraph that describes <br /> what type of
              projects I have created.
            </h4>
          </WorkCenter>
          <WorkBottom>
            <WorkbarLink to="/lp">Landing Pages</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkCenterContainer>
      <Divider />

      {/* RIGHT CONTAINER */}

      <WorkRightContainer>
        <CardBox>
          <WorkTop>
            <FaReact color="Blue" fontSize="2.5em" />
          </WorkTop>
          <WorkCenter>
            <h4 style={{ fontSize: 25 }}>
              This will be a short paragraph that describes <br /> what type of
              projects I have created.
            </h4>
          </WorkCenter>
          <WorkBottom>
            <WorkbarLink to="/js">Test 3</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
