import React, { useState } from "react";
import Headshot from "../components/images/Headshot.png";
import {
  PageContainer,
  LeftContainer,
  Image,
  TextBoxOne,
} from "../styles/ProfilePic.style";
import Line from "../components/images/Line.png";
import DannyBoi from "../components/images/Dannyboi.png";

function ProfilePic() {
  return (
    <PageContainer>
      <LeftContainer>
        <TextBoxOne>
          <h1 style={{ fontSize: 50 }}>Designer by day Dancer by night....</h1>
          <h1 style={{ fontSize: 20 }}>
            Let me create you something beutiful and user friendly. With a
            constant passion <br />
            for furthering my knowledge odds are your application will be better
            tomorrow <br />
            then it is today!
          </h1>
        </TextBoxOne>
      </LeftContainer>
      <Image
        style={{ paddingBottom: 40, width: 2000, height: 700 }}
        src={Line}
      />
      <Image
        style={{ width: 1800, height: 900, paddingTop: 300, paddingLeft: 900 }}
        src={DannyBoi}
      />
    </PageContainer>
  );
}

export default ProfilePic;
