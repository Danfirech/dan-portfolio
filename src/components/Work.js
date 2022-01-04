import React from "react";
import { useState } from "react";
import WorkPage from "../pages/WorkPage";

import { NavbarLink } from "../styles/Navbar.style";

import {
  WorkPageContainer,
  WorkLeftContainer,
  WorkCenterContainer,
  WorkRightContainer,
  Divider,
  WorkTop,
  WorkBottom,
  CardBox,
  WorkText,
} from "../styles/Work.style";
import { DansButton } from "../styles/ButtonOne.Style";

function ProfilePic() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <WorkPageContainer>
      <WorkLeftContainer>
        <CardBox>
          <WorkTop>
            <WorkText>JavaScript </WorkText>
          </WorkTop>
          <WorkBottom>
            {/* <DansButton onClick={() => setIsToggled(!isToggled)}>
              Check it out
            </DansButton>
            {isToggled && <JavascriptPage />} */}
            <NavbarLink to="/js">Javasript</NavbarLink>
          </WorkBottom>
        </CardBox>
      </WorkLeftContainer>
      <Divider />
      <WorkCenterContainer>
        <CardBox>
          <WorkTop>
            <WorkText>Landing Pages</WorkText>
          </WorkTop>
          <WorkBottom>
            <NavbarLink to="/lp">Landing Pages</NavbarLink>
          </WorkBottom>
        </CardBox>
      </WorkCenterContainer>
      <Divider />
      <WorkRightContainer>
        <CardBox>
          <WorkTop>
            <WorkText>React Native</WorkText>
          </WorkTop>
          <WorkBottom>
            <NavbarLink to="/js">Test 3</NavbarLink>
          </WorkBottom>
        </CardBox>
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;