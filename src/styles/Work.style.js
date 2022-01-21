import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 300px;
  width: 100vw;
  padding-bottom: 240px;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100vw;
    padding-top: 750px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 80%;
  background-color: white;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding-top: 40px;
  }
`;

export const Divider = styled.div`
  width: 0.05%;
  background-color: white;
  height: 400px;
  padding-top: 100px;
  @media (max-width: 390px) {
    display: none;
  }
`;

export const WorkTop = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 390px) {
    align-items: center;
    justify-content: center;
    height: 300px;
  }
`;

export const WorkCenterContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: white;
  justify-content: center;
  padding-top: 40px;
  align-items: center;
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
`;

export const WorkCenter = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 80px;
    height: 100px;
  }
`;

export const WorkBottom = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
  @media (min-width: 390px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20px;
  }
`;

export const WorkText = styled.div`
  color: white;
  font-weight: 400px;
`;
