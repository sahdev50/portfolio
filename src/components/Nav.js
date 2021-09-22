import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
Ba;
const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        Capture
      </Link>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contactUs">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
`;

export default Nav;
