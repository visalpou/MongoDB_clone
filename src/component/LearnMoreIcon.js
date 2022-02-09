import React from "react";
import styled from "styled-components";
function LearnMoreIcon({ className,children }) {
    
  return (
    <Icon className="flex items-center">
      <a className={`hover:text-green-001 cursor-pointer font-medium ${className}`}>
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