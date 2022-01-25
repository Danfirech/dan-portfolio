import styled from "styled-components";

export const AboutMeContainer = styled.div`
  height: 450px;
  display: flex;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    padding-right: 25;
    padding-left: 25;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding-right: 25;
    padding-left: 25;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 450px;
  width: 50%;
  background-color: #011936ff;
  align-items: center;
  justify-content: center;
  padding-left: 150px;
  @media (max-width: 390px) {
    height: 100px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
  }
  @media (max-width: 480px) {
    height: 100px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
  }
`;

// export const CenterContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 60%;
//   background-color: #011936ff;
// `;

export const RightContainer = styled.div`
  display: flex;
  height: 450px;
  width: 50%;
  background-color: #011936ff;
  align-items: center;
  justify-content: center;
  padding-right: 300px;

  @media (max-width: 390px) {
    height: 100px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  }

  @media (max-width: 480px) {
    height: 100px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  }
`;
