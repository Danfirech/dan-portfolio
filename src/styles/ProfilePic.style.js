import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 500px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 390px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    height: 1500px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
  @media (max-width: 1300px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   height: 1000px;px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100vw;
  flex-direction: column;
  background-color: white;
  @media (max-width: 390px) {
    width: 100vw;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding-right: 150px;
  }
  @media (max-width: 480px) {
    width: 100vw;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding-right: 150px;
  }
  @media (max-width: 1300px) {
    width: 100vw;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding-right: 150px;
    height: 1200px;
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 1100px;
  position: relative;
  padding-top: 300px;
  padding-right: 300px;
  @media (max-width: 390px) {
    width: 100px;
    height: 450px;
    position: relative;
    padding-top: 1000px;
    padding-right: 0px;
    padding-bottom: 100px;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 450px;
    position: relative;
    padding-top: 1000px;
    padding-right: 0px;
    padding-bottom: 100px;
  }
  @media (max-width: 1300px) {
    width: 100px;
    height: 450px;
    position: relative;
    padding-top: 1000px;
    padding-right: 0px;
    padding-bottom: 170px;
  }
`;

export const Image2 = styled.img`
  width: 100vw;
  height: 1000px;
  position: absolute;
  justify-content: center;
  align-items: center;
  @media (max-width: 390px) {
    width: 100vw;
    height: 350px;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding-top: 1100px;
    padding-bottom: 200px;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 350px;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding-top: 1100px;
    padding-bottom: 200px;
  }
  @media (max-width: 1300px) {
    width: 100vw;
    height: 350px;
    position: absolute;
    justify-content: center;
    align-items: center;
    padding-top: 1100px;
    padding-bottom: 250px;
  }
`;

export const TextBoxOne = styled.div`
  color: #000522;
  display: flex;
  width: 300px;
  height: 200px;
  background: none;
  margin-left: 200px;
  position: absolute;
  z-index: 3;
  flex-direction: column;
  font-family: "Quicksand";
  padding-top: 100px;
  @media (max-width: 390px) {
    padding-top: 1700px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Quicksand";
  }
  @media (max-width: 480px) {
    padding-top: 1700px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Quicksand";
  }
  @media (max-width: 1300px) {
    padding-top: 1700px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Quicksand";
  }
`;
