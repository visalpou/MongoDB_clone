import React from "react";
import styled from "styled-components";
import { Bosch, Cisco, Humanity, Toyota } from "./Icons";

function CompanyLogo() {
  return (
    <TitleDetail>
      <h1 className="text-center text-md py-10">
        TRUSTED BY THOUSANDS OF ORGANIZATIONS INCLUDING
      </h1>
      <Image className="grid items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 space-y-10">
        <div className="flex justify-center w-full">
          <Bosch />
        </div>
        <div className="flex justify-center w-full">
          <Cisco />
        </div>
        <div className="flex justify-center w-full">
          <Humanity />
        </div>
        <div className="flex justify-center w-full">
          <Toyota />
        </div>
      </Image>
    </TitleDetail>
  );
}

export default CompanyLogo;
const TitleDetail = styled.div`
  h1 {
    font-family: Source Code Pro;
    letter-spacing: 3px;
    font-weight: 500;
  }
`;
const Image = styled.div``;
