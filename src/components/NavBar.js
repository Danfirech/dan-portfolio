import React from "react";
import {
  NavbarContainer,
  Leftcontainer,
  Rightcontainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
} from "../styles/Navbar.style";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <Leftcontainer>
          <NavbarLinkContainer>
            <Link to="/">Home</Link>
          </NavbarLinkContainer>
        </Leftcontainer>
        <Rightcontainer />
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}

export default NavBar;
