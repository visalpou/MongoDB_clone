import React from "react";
import styled from "styled-components";
function LearnMoreIcon({ children }) {
    
  return (
    <Icon className="flex items-center">
      <a className="text-white-001 hover:text-green-001 cursor-pointer font-medium">
        &nbsp; {children}
      </a>
      {/* <Line className="line"></Line> */}
    </Icon>
  );
}

export default LearnMoreIcon;
const Icon = styled.div`
  
`
const Line = styled.div`
    background:#01ed64;
    padding:2px 25px;
    margin:10px;
`