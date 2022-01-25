import React, { useState } from "react";
import {
  PageContainer,
  LeftContainer,
  Image,
  Image2,
  TextBoxOne,
} from "../styles/ProfilePic.style";
import Line from "../components/images/Line.png";
import Dan from "../components/images/Dan.png";

function ProfilePic() {
  return (
    <PageContainer>
      <LeftContainer>
        <TextBoxOne>
          <h1 style={{ fontSize: 50 }}>Designer By Day Dancer By Night....</h1>
          <h1 style={{ fontSize: 20, paddingTop: 45 }}>
            I create simple, clean, user friendly web applications. I like to
            have fun while doing so!
          </h1>
        </TextBoxOne>
      </LeftContainer>
      <Image2 src={Line} />
      <Image src={Dan} />
    </PageContainer>
  );
}

export default ProfilePic;
