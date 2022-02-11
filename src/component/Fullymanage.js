import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import { Cloud, Phone } from './Icons';
import LearnMoreIcon from './LearnMoreIcon';

function Fullymanage() {
  return (
    <Fragment>
        <Title className='text-center py-20'>
            <h1 className='text-5xl mb-5 font-serif'>Fully managed in the cloud</h1>
            <p className='text-xl font-medium text-gray-001'>Start in seconds and scale to millions with our cloud services</p>
        </Title>
        <Grid className='grid grid-cols-3 gap-7 mx-10'>
            <div className='col-span-2 border-2 border-gray-002 rounded-3xl shadow-md'>
                <div className='grid grid-cols-2 p-10'>
                    <div>
                        <Cloud/>
                        <h6 className='py-10'>Atlast</h6>
                        <h1 className='py-5 text-3xl font-medium~~~'>Multi-cloud application data platform</h1>
                        <p className='text-base text-gray-001 font-medium'>An integrated suite of cloud database services that allow you to address a wide variety of use cases, from transactional to analytical, from search to data visualizations.</p>
                        <LearnMoreIcon className='text-black-001 py-5'>Learn More &#8594; </LearnMoreIcon>
                    </div>
                    <div>
                       <Phone/>
                    </div>
                </div>
            </div>
            <div className='border-2 border-gray-002 rounded-3xl p-10 shadow-md'>
               <Phone/>
                <h6 className='py-10'>Atlast</h6>
                <h1 className='py-5 text-3xl font-medium '>Multi-cloud application data platform</h1>
                <p className='text-base text-gray-001 font-medium'>An integrated suite of cloud database services that allow you to address a wide variety of use cases, from transactional to analytical, from search to data visualizations.</p>
                <LearnMoreIcon className='text-black-001 py-5'>Learn More &#8594; </LearnMoreIcon>
            </div>
        </Grid>
    </Fragment>
  );
}

export default Fullymanage;
const Title = styled.div``
const Grid = styled.div``