import React from 'react';
import SubBuildFasterICon from './SubBuildFasterICon';

const data =[
    {
        img:"/img/svg/general_features_build_faster.svg",
        title:"Build Faster",
        desc:"Ship and iterate 3–5x faster with our flexible document data model and a unified query interface for any use case.",
    },
    {
        img:"/img/svg/general_features_scale_bigger.svg",
        title:"Scale Further",
        desc:"Whether it’s your first customer or 20 million users around the world, meet your performance SLAs in any environment.",
    },
    {
        img:"/img/svg/general_security.svg",
        title:"Sleep Better",
        desc:"Easily ensure high availability, protect data integrity, and meet the security and compliance standards for your mission-critical workloads.",
    }
]

function BuildFasterIcon() {
  return(
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 space-y-3'>
            {data.map((item)=>{
                return <SubBuildFasterICon {...item} />
            })}
      </div>
  )
}

export default BuildFasterIcon;
