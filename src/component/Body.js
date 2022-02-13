import React from 'react';
import styled from 'styled-components';
import BtnTryFree from './BtnTryFree';
import {CoverHeader} from './Icons'
import LearnMoreIcon from './LearnMoreIcon';
function Body({bg_color,text_color,box_title,box_desc,click_title1,title_1,title_2,desc,btn_title,click_title2}) {
  return(
    <Cover className={`grid lg:grid-cols-2 md:grid-cols-6 ${bg_color}` }>
        <div>
            <div className='flex justify-center translate-y-40 space-x-5'>
                <p className='border bg-green-004 font-medium rounded-md px-2'>{box_title} </p>
                <p className={text_color}> {box_desc} </p>
                <LearnMoreIcon className={text_color}>{click_title1} </LearnMoreIcon>
            </div>
            <Title className='translate-y-40 container mx-auto text-white-001 p-28'>
                <h1 className={`text-7xl ${text_color}`}> {title_1} </h1>
                <h1 className={`text-7xl mb-10 ${text_color}`}> {title_2} </h1>
                <p className='text-2xl text-gray-001 mb-5'> {desc} </p>
                <div className='flex'>
                    <BtnTryFree className="" > {btn_title} </BtnTryFree>
                    <LearnMoreIcon> {click_title2} &#8594; </LearnMoreIcon>
                </div>
            </Title>
        </div>
        <div className='flex justify-center translate-y-24'>
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