import React, { useState } from "react";
import Headshot from "../components/images/Headshot.png";
import {
  PageContainer,
  LeftContainer,
  RightContainer,
  Image,
} from "../styles/ProfilePic.style";

function ProfilePic() {
  return (
    <PageContainer>
      <LeftContainer>
        <Image src={Headshot} />
      </LeftContainer>
      <RightContainer></RightContainer>
    </PageContainer>
  );
}

export default ProfilePic;
