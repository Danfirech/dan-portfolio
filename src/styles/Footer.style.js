import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100vw;
  padding-top: 100px;
  @media (max-width: 390px) {
    flex-direction: column;
    height: 280px;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 280px;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterLeftContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #016c8c;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 390px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const FooterCenterContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #016c8c;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 170px;
  padding-right: 170px;
  @media (max-width: 390px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 33.3%;
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (max-width: 480px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 33.3%;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const FooterRightContainer = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #016c8c;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 390px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
