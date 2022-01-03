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
} from "../styles/Work.style";
import { DansButton } from "../styles/ButtonOne.Style";

function ProfilePic() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <WorkPageContainer>
      <WorkLeftContainer>
        <CardBox>
          <WorkTop></WorkTop>
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
          <WorkTop></WorkTop>
          <WorkBottom>
            <NavbarLink to="/js">Test 2</NavbarLink>
          </WorkBottom>
        </CardBox>
      </WorkCenterContainer>
      <Divider />
      <WorkRightContainer>
        <CardBox>
          <WorkTop></WorkTop>
          <WorkBottom>
            <NavbarLink to="/js">Test 3</NavbarLink>
          </WorkBottom>
        </CardBox>
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
