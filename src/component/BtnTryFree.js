import React from 'react';
import styled from 'styled-components';

function BtnTryFree({children}) {
  return(
   <a href='#' className='text-black-001 border border-black-001 bg-green-001 px-10 py-3 rounded hover:rounded-full font-medium'>{children}</a>
  )
}

export default BtnTryFree;
const Button = styled.div`


`