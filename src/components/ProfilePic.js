import React, { useState } from "react";
import Headshot from "../components/images/Headshot.png";
import {
  PageContainer,
  LeftContainer,
  RightContainer,
  Image,
  TextBoxOne,
  CenterContainer,
} from "../styles/ProfilePic.style";

function ProfilePic() {
  return (
    <PageContainer>
      <LeftContainer>
        <TextBoxOne>
          <h1 style={{ fontSize: 50 }}>Designer by day Dancer by night....</h1>
          <h1 style={{ fontSize: 12 }}>
            Let me create you something beutiful and user friendly. With a
            constant passion <br />
            for furthering my knowledge odds are your application will be better
            tomorrow <br />
            then it is today!
          </h1>
        </TextBoxOne>
      </LeftContainer>
      <CenterContainer>
        <Image src={Headshot} />
      </CenterContainer>
      <RightContainer></RightContainer>
    </PageContainer>
  );
}

export default ProfilePic;
