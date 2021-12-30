import React from "react";
import WorkBox from "./WorkBox";

import {
  WorkPageContainer,
  WorkLeftContainer,
  WorkCenterContainer,
  WorkRightContainer,
  Divider,
  WorkTop,
} from "../styles/Work.style";

function ProfilePic() {
  return (
    <WorkPageContainer>
      <WorkLeftContainer>
        <WorkBox></WorkBox>
      </WorkLeftContainer>
      <Divider />
      <WorkCenterContainer>
        <WorkBox />
      </WorkCenterContainer>
      <Divider />
      <WorkRightContainer>
        <WorkBox />
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
