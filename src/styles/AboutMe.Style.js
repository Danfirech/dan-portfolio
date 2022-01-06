import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  width: 100vw;
  background-color: #f0f1f4;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  background-color: #011936ff;
`;

// export const CenterContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 60%;
//   background-color: #011936ff;
// `;

export const RightContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  background-color: #011936ff;
`;

export const AboutMeText = styled.div`
  color: #f9dc5cff;
  width: 300px;
  height: 200px;
  background: none;
  margin-left: 300px;
  position: absolute;
  @media (max-width: 1060px) {
    margin-left: 100px;

`;
