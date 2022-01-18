import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: row;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100vw;
  background-color: white;
  @media (max-width: 389px) {
    width: 100%;
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  position: absolute;
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 389px) {
    display: none;
  }
`;

export const Image2 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  justify-content: center;
  align-items: center;
  @media (max-width: 389px) {
    width: 150px;
    height: 150px;
    position: absolute;
    justify-content: center;
    align-items: center;
  }
`;

export const TextBoxOne = styled.div`
  color: #000522;
  width: 300px;
  height: 200px;
  background: none;
  margin-left: 300px;
  position: absolute;
  z-index: 3;
  @media (max-width: 1060px) {
    margin-left: 100px;
  }

  @media (max-width: 389px) {
    margin-left: 0px;
  }
`;
