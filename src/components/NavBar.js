import React from "react";
import {
  NavbarContainer,
  Leftcontainer,
  Rightcontainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
} from "../styles/Navbar.style";

function NavBar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <Leftcontainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/projects">Projects</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <OpenLinksButton>&#8801;</OpenLinksButton>
          </NavbarLinkContainer>
        </Leftcontainer>
        <Rightcontainer />
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}

export default NavBar;
