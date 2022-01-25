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
import { Button } from "../styles/ShowWork.Style";
import NextJsLandingPage from "../components/images/NextJsLandingPage.png";
import { ProjectPic } from "../styles/ShowWork.Style";
import FooterTwo from "../components/FooterTwo";
import { Line } from "../styles/ShowWork.Style";
import { LineContainer } from "../styles/ShowWork.Style";
import JSScroll from "../components/images/JSScroll.png";
import JSVideo from "../components/images/JSVideo.png";
import JSCountdown from "../components/images/JScountdown.png";
import LPBathBomb from "../components/images/LPBathBomb.png";
import LPCovidTesting from "../components/images/LPCovidTesting.png";
import RNQuote from "../components/images/RNQuote.png";
import RNTask from "../components/images/RNTask.png";
import RNGame from "../components/images/RNGame.png";

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
        {/* <Button onClick={fourthButton}>API</Button> */}
      </TopContainer>
      {/* <div>
        <Image
          style={{
            width: 500,
            height: 500,
            paddingTop: 100,
            overflow: "hidden",
            paddingRight: 180,
          }}
          src={blobOne}
        />
      </div> */}

      {toggle && (
        <ContainerOneJS>
          <Width2>
            <BoxContain>
              <BoxTop></BoxTop>

              <BoxMiddle>
                <img src="https://img.icons8.com/color/85/000000/javascript--v1.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Javscript Scroll Project
                </h3>
              </BoxMiddle>

              <ProjectPic>
                <img src={JSScroll} height={200} width={300} />
              </ProjectPic>

              <BoxBottom>
                <a
                  href="https://javscriptscroll.netlify.app"
                  target="https://javscriptscroll.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                >
                  View
                </a>
                <a
                  href="https://github.com/Danfirech/js10-scroll"
                  target="https://github.com/Danfirech/js10-scroll"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            {/* <LineContainer>
              <Line />
            </LineContainer> */}
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/color/85/000000/javascript--v1.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Javascript Video Project
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={JSVideo} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  href="https://javscriptvideo.netlify.app"
                  target="https://javscriptvideo.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                >
                  View
                </a>
                <a
                  href="https://github.com/Danfirech/js9-video"
                  target="https://github.com/Danfirech/js9-video"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            {/* <LineContainer>
              <Line />
            </LineContainer> */}
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/color/85/000000/javascript--v1.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Javascript Countdown Timer
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={JSCountdown} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  href="https://javscriptcountdown.netlify.app"
                  target="https://javscriptcountdown.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                >
                  View
                </a>
                <a
                  href="https://github.com/Danfirech/js12-countdowntimer"
                  target="https://github.com/Danfirech/js12-countdowntimer"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerOneJS>
      )}
      {toggle2 && (
        <ContainerTwoLanding>
          <Width2>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/officel/80/000000/react.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Shopify Bath Bomb's
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={LPBathBomb} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  href="https://danpossehlbathbomb.netlify.app"
                  target="https://danpossehlbathbomb.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                >
                  View
                </a>
                <a
                  href="https://github.com/Danfirech/shopify-store"
                  target="https://github.com/Danfirech/shopify-store"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/officel/80/000000/react.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Next.JS Landing Page
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={NextJsLandingPage} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                ></a>
                <a
                  href="https://github.com/Danfirech/njs-Landing-page"
                  target="https://github.com/Danfirech/njs-Landing-page"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/officel/80/000000/react.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  Covid Testing Site
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={LPCovidTesting} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  href="https://covidsitedanandnat.netlify.app"
                  target="https://covidsitedanandnat.netlify.app"
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                >
                  View
                </a>
                <a
                  href="https://github.com/Danfirech/covid-landingpage"
                  target="https://github.com/Danfirech/covid-landingpage"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerTwoLanding>
      )}

      {toggle3 && (
        <ContainerThreeNative>
          <Width2>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/wired/80/000000/cell-phone.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  React Native Quote Generator App
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={RNQuote} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                ></a>
                <a
                  href="https://github.com/Danfirech/rn-dansapp1/blob/master/App.js"
                  target="https://github.com/Danfirech/rn-dansapp1/blob/master/App.js"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/wired/80/000000/cell-phone.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  React Native Pick A Number Game App
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={RNGame} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                ></a>
                <a
                  href="https://github.com/Danfirech/rn-section4"
                  target="https://github.com/Danfirech/rn-section4"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
            <BoxContain>
              <BoxTop></BoxTop>
              <BoxMiddle>
                <img src="https://img.icons8.com/wired/80/000000/cell-phone.png" />
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                    paddingTop: 30,
                  }}
                >
                  React Native Task Manager App
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={RNTask} height={200} width={300} />
              </ProjectPic>
              <BoxBottom>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#011936ff",
                    paddingRight: "50px",
                    fontSize: "30px",
                  }}
                ></a>
                <a
                  href="https://github.com/Danfirech/rn-first-app"
                  target="https://github.com/Danfirech/rn-first-app"
                >
                  <BsGithub color=" #011936ff" fontSize="2.5em" />
                </a>
              </BoxBottom>
            </BoxContain>
          </Width2>
        </ContainerThreeNative>
      )}
      {/* {toggle4 && (
        <ContainerThreeNative>
          <Width2>
            <BoxContain>
              <BoxTop>
                <DiJavascript1 color="#f7df1e" fontSize="2.5em" />
              </BoxTop>
              <BoxMiddle>
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                  }}
                >
                  Title of Project
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={Pic} height={200} width={300} />
              </ProjectPic>
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
                <h3
                  style={{
                    color: "#011936ff",
                    fontSize: 28,
                    paddingBottom: 30,
                  }}
                >
                  Title of Project
                </h3>
              </BoxMiddle>
              <ProjectPic>
                <img src={Pic} height={400} width={200} />
              </ProjectPic>

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
      )} */}
      <FooterTwo />
    </>
  );
}

export default WorkPageNew;
