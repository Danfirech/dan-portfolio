import styled from "styled-components";

export const AboutMeContainer = styled.div`
  height: 450px;
  display: flex;
  @media (max-width: 389px) {
    display: flex;
    flex-direction: column;
    padding-right: 25;
    padding-left: 25;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 450px;
  width: 50%;
  background-color: #011936ff;
  @media (max-width: 389px) {
    height: 450px;
    width: 100vw;
    align-items: center;
    justify-content: center;
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

  @media (max-width: 389px) {
    height: 450px;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;
