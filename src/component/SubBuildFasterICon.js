import React from 'react';
import styled from 'styled-components';

function SubBuildFasterICon({img,title,desc}) {
  return (
      <Card className='mx-10'>
            <div className='flex justify-center'>
                <CardImage src={img}/>
            </div>
            <Title className='text-center text-2xl py-3 font-medium'>{title}</Title>
            <Description>{desc}</Description>
      </Card>
  );
}

export default SubBuildFasterICon;
const Card = styled.div`
`
const CardImage = styled.img``
const Title = styled.div``
const Description = styled.div``