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
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaMobileAlt } from "react-icons/fa";
import { LineContainer } from "../styles/ShowWork.Style";
import { Line } from "../styles/ShowWork.Style";
import { Button } from "../styles/ShowWork.Style";

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
        <Button onClick={firstButton}>Javascript</Button>
        <Button onClick={secondButton}>Landing Pages</Button>
        <Button onClick={thirdButton}>React Native</Button>
        <Button onClick={fourthButton}>API</Button>
      </TopContainer>

      {toggle && (
        <ContainerOneJS>
          <Width2>
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
            <BoxContain>
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
