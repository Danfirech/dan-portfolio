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
  const [toggle, setToggle] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const firstButton = () => {
    setToggle(true);
    setToggle2(false);
    setToggle3(false);
    setToggle4(false);
  };

  const secondButton = () => {
    setToggle(false);
    setToggle2(true);
    setToggle3(false);
    setToggle4(false);
  };

  const thirdButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(true);
    setToggle4(false);
  };

  const fourthButton = () => {
    setToggle(false);
    setToggle2(false);
    setToggle3(false);
    setToggle4(true);
  };

  return (
    <>
      <TopContainer>
        <h1 onClick={firstButton} style={{ marginTop: 80 }}>
          OK
        </h1>
        <h1 onClick={secondButton} style={{ marginTop: 110 }}>
          OK
        </h1>
        <h1 onClick={thirdButton} style={{ marginTop: 80 }}>
          OK
        </h1>
        <h1 onClick={fourthButton} style={{ marginTop: 80 }}>
          OK
        </h1>
      </TopContainer>
      {toggle && (
        <ContainerOneJS>
          <Width1></Width1>
          <Width2></Width2>
          <Width3></Width3>
        </ContainerOneJS>
      )}
      {toggle2 && (
        <ContainerTwoLanding>
          <Width1>TWOTWOTWOTWOTWO</Width1>
          <Width2>TWOTWOTWOTWOTWO</Width2>
          <Width3>TWOTWOTWOTWOTWO</Width3>
        </ContainerTwoLanding>
      )}

      {toggle3 && (
        <ContainerThreeNative>
          <Width1>THREETHREETHREETHREE</Width1>
          <Width2>THREETHREETHREETHREE</Width2>
          <Width3>THREETHREETHREETHREE</Width3>
        </ContainerThreeNative>
      )}
      {toggle4 && (
        <ContainerThreeNative>
          <Width1>FOURFOURFOURFOUR</Width1>
          <Width2>FOURFOURFOURFOUR</Width2>
          <Width3>FOURFOURFOURFOUR</Width3>
        </ContainerThreeNative>
      )}
      <Footer />
    </>
  );
}

export default WorkPageNew;
