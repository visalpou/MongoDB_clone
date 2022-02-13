import React from 'react'
import styled from 'styled-components'
import { MainLogo } from './Icons'

function Footer() {
  return (
    <Container className='grid grid-cols-4 px-36 justify-center bg-green-003 py-10 text-white-001'>
        <ul className='space-y-5'>
            <li> 
                <MainLogo />
            </li>
            <li>English</li>
        </ul>
        <ul className='space-y-5'>
            <li className='font-medium'>About</li>
            <li>Careers</li>
            <li>Investor Reations</li>
            <li>Legal Notices</li>
            <li>Privacy Notices</li>
            <li>Security Information</li>
            <li>Trust Center</li>
        </ul>
        <ul className='space-y-5'>
            <li className='font-medium'>Support</li>
            <li>Contact Us</li>
            <li>Customer Portal</li>
            <li>Atlas Status</li>
            <li>Paod Support</li>
        </ul>
        <ul className='space-y-5'>
            <li className='font-medium'>Social</li>
            <li>Github</li>
            <li>Stack Overflow</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
            <li>Twitter</li>
            <li>Twtich</li>
            <li>Facebook</li>
        </ul>
    </Container>
    )
}

export default Footer
const Container = styled.div`


`