import React from "react";
import styled from "styled-components";
import BtnTryFree from "./BtnTryFree";
import { CoverHeader } from "./Icons";
import LearnMoreIcon from "./LearnMoreIcon";
function Body({
  bg_color,
  text_color,
  title_1,
  title_2,
  desc,
  btn_title,
  click_title2,
}) {
  return (
    <Cover className={`p-12 grid lg:grid-cols-2 ${bg_color}`}>
      <Title className="container mx-auto text-white-001">
        <h1 className={`text-7xl ${text_color}`}> {title_1} </h1>
        <h1 className={`text-7xl mb-10 ${text_color}`}> {title_2} </h1>
        <p className="text-2xl text-gray-001 mb-5"> {desc} </p>
        <div className="flex">
          <BtnTryFree className=""> {btn_title} </BtnTryFree>
        </div>
      </Title>
      <div className="flex justify-center" style={{ width: "40vw" }}>
        <CoverHeader />
      </div>
    </Cover>
  );
}

export default Body;
const Cover = styled.div`
  z-index: -1;
`;
const Title = styled.div`
  h1 {
    font-family: MongoDB Value Serif;
  }
  p {
    font-family: Euclid Circular A;
  }
`;
