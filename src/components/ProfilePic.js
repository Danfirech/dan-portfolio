import React, { useState } from "react";
import {
  PageContainer,
  LeftContainer,
  Image,
  Image2,
  TextBoxOne,
} from "../styles/ProfilePic.style";
import Line from "../components/images/Line.png";
import DannyBoi from "../components/images/DannyBoi.png";

function ProfilePic() {
  return (
    <PageContainer>
      <LeftContainer>
        <TextBoxOne>
          <h1 style={{ fontSize: 50 }}>Designer by day Dancer by night....</h1>
          <h1 style={{ fontSize: 20, paddingTop: 45 }}>
            Let me create you something beutiful and user friendly. With a
            constant passion for furthering my knowledge odds are your
            application will be better tomorrow then it is today!
          </h1>
        </TextBoxOne>
      </LeftContainer>
      <Image2 src={Line} />
      <Image src={DannyBoi} />
    </PageContainer>
  );
}

export default ProfilePic;
