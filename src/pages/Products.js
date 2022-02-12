import React from 'react'
import BodyTitle from '../component/BodyTitle';
import BuildFasterIcon from '../component/BuildFasterIcon';
import CompanyLogo from '../component/CompanyLogo';
import FinancalService from '../component/FinancalService';
import Fullymangeinthecloud from '../component/Fullymangeinthecloud';
import HeaderCover from '../component/HeaderCover';

function Products() {
  return (
    <div>
        <HeaderCover/>
        <CompanyLogo/>
        <BodyTitle/>
        <BuildFasterIcon/>     
        <Fullymangeinthecloud/>
        <FinancalService/>
    </div>
  )
}

export default Products