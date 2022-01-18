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
import { Width2 } from "../styles/ShowWork.Style";
import { TitleContainer } from "../styles/ShowWork.Style";
import { IconImage } from "../styles/ShowWork.Style";
import Api from "../components/images/api.png";
import appStore from "../components/images/appStore.png";
import javscript from "../components/images/javascript.png";
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaMobileAlt } from "react-icons/fa";
import react from "../components/images/react.png";
import { LineContainer } from "../styles/ShowWork.Style";
import { Line } from "../styles/ShowWork.Style";
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
        <h3 onClick={firstButton}>Javascript</h3>
        <h3 onClick={secondButton}>Landing Pages</h3>
        <h3 onClick={thirdButton}>React Native</h3>
        <h3 onClick={fourthButton}>API</h3>
      </TopContainer>
      <TitleContainer></TitleContainer>
      {toggle && (
        <ContainerOneJS>
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <LineContainer>
              <Line />
            </LineContainer>
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <LineContainer>
              <Line />
            </LineContainer>
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerOneJS>
      )}
      {toggle2 && (
        <ContainerTwoLanding>
          <Width2>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiReact color="#61DBFB" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiReact color="#61DBFB" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <DiReact color="#61DBFB" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerTwoLanding>
      )}

      {toggle3 && (
        <ContainerThreeNative>
          <Width2>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <FaMobileAlt color="black" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <FaMobileAlt color="black" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
            <BoxContain className="shadow-drop-br">
              <BoxTop>
                <FaMobileAlt color="black" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3 style={{ color: "#011936ff" }}>Title of Project</h3>
              </BoxMiddle>
              <BoxBottom>
                <a
                  href="https://www.applevacations.com/#!/"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerThreeNative>
      )}
      {toggle4 && (
        <ContainerThreeNative>
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
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
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                  }}
                >
                  View
                </a>
                <BsGithub color=" #011936ff" fontSize="2.5em" />
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerThreeNative>
      )}
    </>
  );
}

export default WorkPageNew;
