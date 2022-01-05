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
            <WorkText>
              <SiJavascript color="yellow" fontSize="2.5em" />
            </WorkText>
          </WorkTop>
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
      <WorkCenterContainer>
        <CardBox>
          <WorkTop>
            <FaReact color="Blue" fontSize="2.5em" />
          </WorkTop>
          <WorkBottom>
            <WorkbarLink to="/lp">Landing Pages</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkCenterContainer>
      <Divider />
      <WorkRightContainer>
        <CardBox>
          <WorkTop>
            <FaReact color="Blue" fontSize="2.5em" />
          </WorkTop>
          <WorkBottom>
            <WorkbarLink to="/js">Test 3</WorkbarLink>
          </WorkBottom>
        </CardBox>
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
