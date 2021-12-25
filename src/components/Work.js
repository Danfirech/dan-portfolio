import React from "react";
import WorkBox from "./WorkBox";

import {
  WorkPageContainer,
  WorkLeftContainer,
  WorkCenterContainer,
  WorkRightContainer,
} from "../styles/Work.style";

function ProfilePic() {
  return (
    <WorkPageContainer>
      <WorkLeftContainer>
        <WorkBox />
      </WorkLeftContainer>
      <WorkCenterContainer>
        <WorkBox />
      </WorkCenterContainer>
      <WorkRightContainer>
        <WorkBox />
      </WorkRightContainer>
    </WorkPageContainer>
  );
}

export default ProfilePic;
