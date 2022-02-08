import React from 'react';
import styled from 'styled-components';
import { Bosch, Cisco, Humanity, Toyota } from './Icons';

function CompanyLogo() {
  return(
      <TitleDetail>
          <h1 className='text-center text-xs py-10'>TRUSTED BY THOUSANDS OF ORGANIZATIONS INCLUDING</h1>
          <Image className='flex justify-center space-x-48'>
             <Bosch/>
             <Cisco/>
             <Humanity/>
             <Toyota/>
          </Image>
      </TitleDetail>
  );
}

export default CompanyLogo;
const TitleDetail = styled.div`
    h1{ 
        font-family: Source Code Pro;
        letter-spacing: 3px;
        font-weight: 500;
    }
`
const Image = styled.div`

`