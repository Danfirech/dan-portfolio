import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: ${(props) => (props.extendNavbar ? "180px" : "180px")};
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 120px;
  }
`;

export const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const RightContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: flex-end;
  background-color: white;
  @media (max-width: 1060px) {
    background-color: white;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;

  text-decoration: none;
  margin: 10px;
  color: #000522;
  padding-left: 50px;

  @media (max-width: 1060px) {
    display: none;
    color: #000522;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: #000522;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 1060px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  @media (min-width: 1060px) {
    display: none;
    color: #000522;
  }
`;

export const WorkbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: #011936ff;
  border: solid;
  height: 30px;
  padding: 5px;
  z-index: 99;
`;
