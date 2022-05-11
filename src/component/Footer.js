import React from "react";
import styled from "styled-components";
import { MainLogo } from "./Icons";

function Footer() {
  return (
    <Container className="space-y-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 px-36 justify-center bg-green-003 py-10 text-white-001">
      <ul className="space-y-5">
        <li>
          <MainLogo />
        </li>
        <li className="font-light ">English</li>
        <li className="font-light ">Legal Notices</li>
        <li className="font-light ">Privacy Notices</li>
      </ul>
      <ul className="space-y-5">
        <li className="font-medium">About</li>
        <li>Careers</li>
        <li>Investor Reations</li>
        <li>Security Information</li>
        <li>Trust Center</li>
      </ul>
      <ul className="space-y-5">
        <li className="font-medium">Support</li>
        <li className="font-light ">Contact Us</li>
        <li className="font-light ">Customer Portal</li>
        <li className="font-light ">Atlas Status</li>
        <li className="font-light ">Paod Support</li>
      </ul>
      <ul className="space-y-5">
        <li className="font-medium">Social</li>
        <li className="font-light ">Github</li>
        <li className="font-light ">Stack Overflow</li>
        <li className="font-light ">LinkedIn</li>
        <li className="font-light ">Youtube</li>
        <li className="font-light ">Twitter</li>
        <li className="font-light ">Twtich</li>
        <li className="font-light ">Facebook</li>
      </ul>
    </Container>
  );
}

export default Footer;
const Container = styled.div``;
