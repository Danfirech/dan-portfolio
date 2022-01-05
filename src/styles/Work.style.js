import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 400px;
  width: 100%;
  padding-bottom: 180px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 80%;
  background-color: #f0f1f4;
`;

export const WorkLeftContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  justify-content: center;
  padding-top: 40px;
`;

export const Divider = styled.div`
  width: 0.05%;
  background-color: #011936ff;
  height: 400px;
  padding-top: 100px;
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const WorkCenterContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  justify-content: center;
  padding-top: 40px;
`;

export const WorkRightContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  justify-content: center;
  padding-top: 40px;
`;

export const WorkTop = styled.div`
  display: flex;
  background-color: #f0f1f4;
  height: 33.33%;
  width: 100%;
  align-items: center;
  padding-left: 40px;
`;

export const WorkCenter = styled.div`
  display: flex;
  background-color: #f0f1f4;
  height: 33.33%;
  width: 100%;
  padding-left: 30px;
`;

export const WorkBottom = styled.div`
  display: flex;
  background-color: #f0f1f4;
  height: 33.33%;
  width: 100%;
  padding-left: 20px;
  padding-top: 30px;
`;

export const WorkText = styled.div`
  color: white;
  font-weight: 400px;
`;
