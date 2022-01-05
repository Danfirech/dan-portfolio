import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BoxContainerTop } from "../styles/WorkBoxes.Style";
import { BoxContainerCenter } from "../styles/WorkBoxes.Style";
import { BoxContainerBottom } from "../styles/WorkBoxes.Style";
import { TextBox } from "../styles/WorkBoxes.Style";

function WorkPage() {
  return (
    <>
      <div>
        <TextBox />
        <BoxContainerTop></BoxContainerTop>
        <BoxContainerCenter></BoxContainerCenter>
        <BoxContainerBottom></BoxContainerBottom>
      </div>
    </>
  );
}

export default WorkPage;
