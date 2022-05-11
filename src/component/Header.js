import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import BtnTryFree from "./BtnTryFree";
import { MainLogo, SearchIcon } from "./Icons";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="lg:hidden flex sm:flex border-0 rounded-none p-2 justify-between">
        <MainLogo />
        <Button ref={btnRef} onClick={onOpen}>
          <HamburgerIcon w={5} h={5} />
        </Button>
      </div>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Nav className="p-7 justify-between items-center bg-white-001 w-full sticky hidden sm:hidden md:hidden lg:flex">
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
    </>
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
