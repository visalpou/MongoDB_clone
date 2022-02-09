import React from 'react';
import styled from 'styled-components';
import BtnTryFree from './BtnTryFree';
import {CoverHeader} from './Icons'
import LearnMoreIcon from './LearnMoreIcon';
function Body() {
  return(
    <Cover className='grid lg:grid-cols-2 md:grid-cols-6 bg-green-003'>
        <div>
            <div className='flex justify-center translate-y-40 space-x-5'>
                <p className='border bg-green-004 font-medium rounded-md px-2'>NEW</p>
                <p className='text-white-001'>Introducing native support for time series data —</p>
                <LearnMoreIcon className='text-white-001'>Learn more</LearnMoreIcon>
            </div>
            <Title className='translate-y-40 container mx-auto text-white-001 p-28'>
                <h1 className='text-7xl'>Buid faster.</h1>
                <h1 className='text-7xl mb-10'>Build smarter.</h1>
                <p className='text-2xl text-gray-001 mb-5'>Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love.</p>
                <div className='flex'>
                    <BtnTryFree className="" >Start Free</BtnTryFree>
                    <LearnMoreIcon>Question? Talk to us &#8594; </LearnMoreIcon>
                </div>
            </Title>
        </div>
        <div className='flex justify-center translate-y-24 '>
            <CoverHeader />
        </div>
    </Cover>
  )
}

export default Body;
const Cover = styled.div`
    z-index:-1;
    padding-bottom: 112px;
`
const Title = styled.div`
    h1{
        font-family: MongoDB Value Serif;
    }
    p{
        font-family:Euclid Circular A;
    }
`