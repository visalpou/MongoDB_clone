import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import LearnMoreIcon from './LearnMoreIcon';

function Fullymanage({grid,grid_cols,title,subtitle,firsticon,secondicon,icon_title,desc_title,desc, right_div_icon_title, right_div_title, right_div_sub_title,btn_title}) {
  return (
    <Fragment>
        <Title className='text-center py-20'>
            <h1 className='text-5xl mb-5 font-serif'>{title} </h1>
            <p className='text-xl font-medium text-gray-001'> {subtitle} </p>
        </Title>
        <Grid className={` mx-10 ${grid}` }>
            <div className={ `border-2 border-gray-002 rounded-3xl shadow-md ${grid_cols}`} >
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 p-10'>
                    <div>
                        {firsticon}
                        <h6 className='py-10'> {icon_title} </h6>
                        <h1 className='py-5 text-3xl font-medium'> {desc_title} </h1>
                        <p className='text-base text-gray-001 font-medium'> {desc} </p>
                        <LearnMoreIcon className='text-black-001 py-5'>{btn_title} &#8594; </LearnMoreIcon>
                    </div>
                    <div>
                       {secondicon}
                    </div>
                </div>
            </div>
            <div className='border-2 border-gray-002 rounded-3xl p-10 shadow-md'>
                {secondicon}
                <h6 className='py-10'> {right_div_icon_title} </h6>
                <h1 className='py-5 text-3xl font-medium'>{right_div_title} </h1>
                <p className='text-base text-gray-001 font-medium'> {right_div_sub_title} </p>
                <LearnMoreIcon className='text-black-001 py-5'> {btn_title} &#8594; </LearnMoreIcon>
            </div>
        </Grid>
    </Fragment>
  );
}

export default Fullymanage;
const Title = styled.div``
const Grid = styled.div``