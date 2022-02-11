import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BtnTryFree from "./BtnTryFree";
import { MainLogo, SearchIcon } from "./Icons";
function Header() {
  return (
    <Nav className="p-7 flex justify-between fixed items-center bg-white-001 w-full">
      <LeftNav className="flex space-x-10 font-medium items-center text-001">
        <Link to="/">
          <MainLogo />
        </Link>
        <Link className="text-001 hover:text-green-002" to="/">
          Products
        </Link>
        <Link className="text-001 hover:text-green-002" to="/solution">
          Solution
        </Link>
        <Link className="text-001 hover:text-green-002" to="/resources">
          Resources
        </Link>
        <Link className="text-001 hover:text-green-002" to="/company">
          Company
        </Link>
        <Link className="text-001 hover:text-green-002" to="/pricing">
          Pricing
        </Link>
      </LeftNav>
      <RightNav className="flex items-center space-x-10">
        <SearchIcon />
        <Link to="/signin">Sign in</Link>
        <BtnTryFree> Try Free </BtnTryFree>
      </RightNav>
    </Nav>
  );
}

export default Header;
const Nav = styled.div`
  z-index: 999999;
`;
const LeftNav = styled.div`
  li {
    list-style: none;
  }
`;
const RightNav = styled.div`
  li {
    list-style: none;
  }
`;
