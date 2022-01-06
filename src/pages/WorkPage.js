import React from "react";
import { useState } from "react";
import { TopContainer } from "../styles/ShowWork.Style";
import { ContainerOneJS } from "../styles/ShowWork.Style";
import { ContainerTwoLanding } from "../styles/ShowWork.Style";
import { ContainerThreeNative } from "../styles/ShowWork.Style";
import { Width1 } from "../styles/ShowWork.Style";
import { Width2 } from "../styles/ShowWork.Style";
import { Width3 } from "../styles/ShowWork.Style";
import { Height1 } from "../styles/ShowWork.Style";
import { Height2 } from "../styles/ShowWork.Style";
import { Height3 } from "../styles/ShowWork.Style";

import Footer from "../components/Footer";

function WorkPageNew() {
  return (
    <>
      <TopContainer>
        <Height1>Hello</Height1>
        <Height2>Hi</Height2>
        <Height3>Please</Height3>
      </TopContainer>
      <ContainerOneJS>
        <Width1></Width1>
        <Width2></Width2>
        <Width3></Width3>
      </ContainerOneJS>
      <ContainerTwoLanding />
      <ContainerThreeNative />
      <Footer />
    </>
  );
}

export default WorkPageNew;
