import React from "react";

import { CardBox, WorkTop, WorkBottom } from "../styles/Work.style";
import { DansButton } from "../styles/ButtonOne.Style";

function WorkBox() {
  const handleClick = () => {
    console.log("hello hello");
  };
  return (
    <CardBox>
      <WorkTop>Hello</WorkTop>
      <WorkBottom>
        <DansButton onClick={handleClick}>Button</DansButton>
      </WorkBottom>
    </CardBox>
  );
}

export default WorkBox;
