import React from 'react';
import styled from 'styled-components';

function BodyTitle() {
  return (
      <WorkingTitle className='py-28'>
            <h1 className='text-center text-6xl font-medium'>Working with data doesn’t</h1>
            <h1 className='text-center text-6xl mb-5 font-medium'>need to be hard</h1>
            <p className='text-xl text-center'>Our guiding principle is to help developers solve their data challenges.</p>
            <p className='text-xl text-center text-gray-200'>Here’s what you can do with MongoDB.</p>
      </WorkingTitle>
  );
}

export default BodyTitle;
const WorkingTitle = styled.div`
    h1{
        font-family: MongoDB Value Serif;
    }
    p{
        color: #5d6c74;
        font-family: Euclid Circular A;
    }

`