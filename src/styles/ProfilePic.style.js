import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 500px;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 500px;
  width: 30%;
  background-color: #011936ff;
`;

export const CenterContainer = styled.div`
  height: 500px;
  width: 30%;
  background-color: #011936ff;
`;

export const RightContainer = styled.div`
  height: 500px;
  width: 40%;
  background-color: #f9dc5cff;
  @media (min-width: !700px) {
    background-color: #011936ff;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 25%;
  padding-left: 430px;
  position: absolute;
  @media (min-width: !700px) {
    display: none;
  }
`;

export const TextBoxOne = styled.div`
  color: #f9dc5cff;
  width: 300px;
  height: 200px;
  background: none;
  margin-left: 300px;
  position: absolute;
`;
