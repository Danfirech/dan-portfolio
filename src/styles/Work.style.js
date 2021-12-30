import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 400px;
  width: 100%;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 380px;
  width: 100%;
  background-color: #f9f9f9;
`;

export const WorkLeftContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 40px;
`;

export const Divider = styled.div`
  width: 0.1%;
  background-color: #390879;
  height: 400px;
  padding-top: 100px;
`;

export const WorkCenterContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 40px;
`;

export const WorkRightContainer = styled.div`
  display: flex;
  height: 400px;
  width: 33.3%;
  background-color: #f0f1f4;
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 40px;
`;

export const WorkTop = styled.div`
  display: flex;
  background-color: black;
  height: 50%;
  width: 100%;
`;

export const WorkBottom = styled.div`
  display: flex;
  background-color: pink;
  height: 50%;
  width: 100%;
  justify-content: center;
`;
