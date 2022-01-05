import React from "react";
import { TextBox } from "../styles/WorkBoxes.Style";
import { WorkBoxTop } from "../styles/WorkBoxes.Style";
import { WorkBoxBottom } from "../styles/WorkBoxes.Style";

function WorkPage() {
  return (
    <>
      <div>
        <WorkBoxTop />
        <WorkBoxBottom />
        <WorkBoxTop />
        <WorkBoxBottom />
        <WorkBoxTop />
        <WorkBoxBottom />
      </div>
    </>
  );
}

export default WorkPage;
