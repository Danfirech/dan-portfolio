import React from "react";
import Navbar from "../../components/NavBar";

import {
  WorkPageWhole,
  TextStrip,
  WorkCenterContainer,
  WorkLeftContainer,
  WorkRightContainer,
  WholePage,
  WorkBottomContainer,
  WorkTopContainer,
  WorkMiddleContainer,
} from "../../styles/WorkPages.Style";

function LandingPage() {
  return (
    <>
      <div>
        <TextStrip />
        <WorkPageWhole>
          <WorkLeftContainer />
          <WorkCenterContainer>
            <WorkTopContainer />
            <WorkMiddleContainer />
            <WorkBottomContainer />
          </WorkCenterContainer>
          <WorkRightContainer />
        </WorkPageWhole>
      </div>
    </>
  );
}

export default LandingPage;
