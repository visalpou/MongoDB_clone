import React from 'react';
import styled from 'styled-components';
import BtnTryFree from './BtnTryFree';
import { MainLogo, SearchIcon } from './Icons';
function Header() {
  return (
      <Nav className='p-7 flex justify-between fixed bg-white-001 w-full'>
            <LeftNav className='flex items-center space-x-10 text-001'>
                <MainLogo/>  
                <li className="dropdown cursor-pointer">
                    <a className='text-001 hover:text-green-002 border-b-green-002 hover:border-b-4 pb-7'>Products</a>
                    <div className="dropdown-menu absolute hidden h-auto pt-4 bg-white-001">
                        <ul className="block w-full bg-white shadow p-10">
                            <li className="py-1"><a className="block cursor-pointer ">Item</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 2</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 3</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 4</a></li>
                            <li className="py-1"><a className="block cursor-pointer">Item 5</a></li>
                        </ul>
                    </div>
                </li>               
                <li> <a href='#' className='border-b-green-002 hover:border-b-4 pb-7'>Solutions</a></li>
                <li> <a href='#' className='border-b-green-002 hover:border-b-4 pb-7'>Resources</a></li>
                <li> <a href='#' className='border-b-green-002 hover:border-b-4 pb-7'>Company</a></li>
                <li> <a href='#' className='border-b-green-002 hover:border-b-4 pb-7'>Pricing</a></li>                                              
            </LeftNav>
            <RightNav className='flex items-center space-x-10'>
                <SearchIcon/>
                <a href='#' className='text-001'>Sign in</a>
                <BtnTryFree> Try Free </BtnTryFree>
            </RightNav>
      </Nav>
  )
}

export default Header;
const Nav = styled.div`
    z-index:999999;
`
const LeftNav = styled.div`
    li{
        list-style:none;  
    }
`
const RightNav = styled.div`
 li{
        list-style:none;
        
    }
`