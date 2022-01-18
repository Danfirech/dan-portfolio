import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100vw;
  @media (max-width: 389px) {
    flex-direction: column;
    height: 240;
  }
`;

export const FooterLeftContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #f9dc5cff;
  justify-content: center;
  @media (max-width: 389px) {
    width: 100vw;
    height: 60px;
  }
`;

export const FooterCenterContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #f9dc5cff;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 170px;
  padding-right: 170px;
  @media (max-width: 389px) {
    width: 100vw;
    justify-content: center;
    padding-left: 0px;
    padding-right: 0px;
    height: 60px;
  }
`;

export const FooterRightContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #f9dc5cff;
  justify-content: center;
  /* padding-top: 40px; */
  justify-content: center;
  @media (max-width: 389px) {
    width: 100vw;
    height: 60px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 80%;
  background-color: #f9dc5cff;
  justify-content: center;
  align-items: center;
  @media (max-width: 389px) {
    width: 100vw;
    height: 60px;
  }
`;
