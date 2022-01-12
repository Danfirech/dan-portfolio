import React from "react";
import { useState } from "react";
import { TopContainer } from "../styles/ShowWork.Style";
import { ContainerOneJS } from "../styles/ShowWork.Style";
import { ContainerTwoLanding } from "../styles/ShowWork.Style";
import { ContainerThreeNative } from "../styles/ShowWork.Style";
import { BoxContain } from "../styles/ShowWork.Style";
import { BoxTop } from "../styles/ShowWork.Style";
import { BoxMiddle } from "../styles/ShowWork.Style";
import { BoxBottom } from "../styles/ShowWork.Style";
import { Width1 } from "../styles/ShowWork.Style";
import { Width2 } from "../styles/ShowWork.Style";
import { Width3 } from "../styles/ShowWork.Style";
import { TitleContainer } from "../styles/ShowWork.Style";
import { IconImage } from "../styles/ShowWork.Style";
import Api from "../components/images/api.png";
import appStore from "../components/images/appStore.png";
import javscript from "../components/images/javascript.png";
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";

import react from "../components/images/react.png";

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
          <IconImage src={javscript} />
        </h1>
        <h1 onClick={secondButton} style={{ marginTop: 80 }}>
          <IconImage src={react} />
        </h1>
        <h1 onClick={thirdButton} style={{ marginTop: 80 }}>
          <IconImage src={appStore} />
        </h1>
        <h1 onClick={fourthButton} style={{ marginTop: 80 }}>
          <IconImage src={Api} />
        </h1>
      </TopContainer>
      <TitleContainer>
        <h4>Javascript</h4>
        <h4>Landing Pages</h4>
        <h4>React Native</h4>
        <h4>API's</h4>
      </TitleContainer>
      {toggle && (
        <ContainerOneJS>
          <Width1>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width1>
          <Width2>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width2>
          <Width3>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{ textDecoration: "none", color: "#011936ff" }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width3>
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
    </>
  );
}

export default WorkPageNew;
