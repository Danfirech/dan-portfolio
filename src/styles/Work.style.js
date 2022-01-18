import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 300px;
  width: 100vw;
  padding-bottom: 140px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 80%;
  background-color: white;
`;

export const Divider = styled.div`
  width: 0.05%;
  background-color: white;
  height: 400px;
  padding-top: 100px;
  @media (max-width: 1060px) {
    display: none;
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
`;

export const WorkTop = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WorkCenter = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WorkBottom = styled.div`
  display: flex;
  background-color: white;
  height: 33.33%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const WorkText = styled.div`
  color: white;
  font-weight: 400px;
`;
