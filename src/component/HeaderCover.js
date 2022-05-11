import React from 'react'
import Body from './Body'

function HeaderCover() {
    const data = [
        {
            text_color:"text-white-001",
            bg_color:"bg-green-003",
            box_title:"NEW",
            box_desc:"Introducing native support for time series data",
            click_title1:"Learn more",
            title_1:"Buid faster.",
            title_2:"Build smarter.",
            desc:"Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love.",
            btn_title:"Start Free",
            click_title2:"Question? Talk to us"
        }
    ]
  return (
    <div>
        {data.map((item) => {
            return <Body {...item} />
        })}
    </div>
  )
}

export default HeaderCover