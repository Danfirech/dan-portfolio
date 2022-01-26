import styled from "styled-components";

export const FooterContainerTwo = styled.div`
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
    padding-top: 1400px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 280px;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding-top: 1400px;
  }
`;

export const FooterLeftContainerTwo = styled.div`
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
  @media (max-width: 1000px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const FooterCenterContainerTwo = styled.div`
  display: flex;
  height: 120px;
  width: 33.3%;
  background-color: #016c8c;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 170px;
  padding-right: 170px;
  z-index: 99;
  @media (max-width: 390px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 33.3%;
    padding-left: 0px;
    padding-right: 0px;
    z-index: 99;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 33.3%;
    padding-left: 0px;
    padding-right: 0px;
    z-index: 99;
  }
`;

export const FooterRightContainerTwo = styled.div`
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
  @media (max-width: 1000px) {
    width: 100vw;
    height: 33.3%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
