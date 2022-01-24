import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100vw;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  @media (max-width: 390px) {
    flex-direction: column;
    padding-bottom: 90px;
    justify-content: space-between;
    align-items: space-between;
    height: 150px;
    width: 100vw;
    padding-left: 0px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  background-color: pink;
  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    padding-bottom: 10px;
    padding-top: 80px;
    padding-right: 0px;
    padding-left: 0px;
    width: 100vw;
    padding-bottom: 5px;
  }
`;

export const ContainerOneJS = styled.div`
  height: 620px;
  width: 100vw;
  background-color: white;
  align-items: center;
`;

export const ContainerTwoLanding = styled.div`
  height: 620px;
  width: 100vw;
  background-color: white;
`;

export const ContainerThreeNative = styled.div`
  height: 620px;
  width: 100vw;
  background-color: white;
`;

export const Width2 = styled.div`
  display: flex;
  height: 460px;
  weight: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 300px;
  padding-left: 300px;
  padding-bottom: 20px;
  @media (max-width: 390px) {
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    weight: 100vw;
    padding-right: 0px;
    padding-left: 0px;
    height: 1280px;
  }
`;

export const BoxTop = styled.div`
  display: flex;
  height: 50%;
  width: 260px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 390px) {
  }
`;

export const BoxMiddle = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 318px;
  background-color: white;
  align-items: center;
  padding-bottom: 20px;
  justify-content: center;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    padding-right: 0px;
    padding-left: 80px;
    height: 300px;
  }
`;

export const BoxBottom = styled.div`
  display: flex;
  height: 30%;
  width: 260px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  @media (max-width: 390px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding-bottom: 230px;
  }
`;

export const BoxContain = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  flex-direction: column;
  @media (max-width: 390px) {
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    width: 100vw;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 300px;
    height: 300px;
  }
`;

// export const LineContainer = styled.div`
//   height: 10px;
//   width: 1322px;
//   background-color: black;
//   display: hidden;
//   justify-content: center;
//   @media (max-width: 390px) {
//     height: 2px;
//     width: 100px;
//     background-color: black;
//     display: flex;
//   }
// `;
// export const Line = styled.div`
//   height: 2px;
//   width: 100px;
//   background-color: black;
//   align-items: center;
//   justify-content: center;
//   display: hidden;
//   @media (max-width: 390px) {
//     height: 2px;
//     width: 100px;
//     background-color: black;
//   }
// `;

export const Button = styled.div`
  color: black;
  width: 180px;
  height: 40;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 26px;
  border: 1px solid black;
  border-radius: 5%;
  background-color: #036c8c;
  color: white;
  margin-right: 150px;
  margin-left: 150px;
`;

export const ProjectPic = styled.div`
  display: flex;
  height: 400px;
  width: 200px;
  border-width: 2px;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 40px;
  }
`;

export const IconImage = styled.img``;
