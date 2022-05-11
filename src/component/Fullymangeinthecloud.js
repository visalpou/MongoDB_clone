import React from "react";
import Fullymanage from "./Fullymanage";
import uuid from "react-uuid";
import { Building, Cloud, People, Phone } from "./Icons";

const data = [
  {
    grid: "grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-7",
    grid_cols: "lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1",
    title: "Fully managed in the cloud",
    subtitle: "Start in seconds and scale to millions with our cloud services",
    firsticon: <Cloud />,
    secondicon: <Phone />,
    icon_title: "Atlast",
    desc_title: "Multi-cloud application data platform",
    desc: "An integrated suite of cloud database services that allow you to address a wide variety of use cases, from transactional to analytical, from search to data visualizations.",
    right_div_icon_title: "Realm",
    right_div_title: "Work with data at the Age",
    right_div_sub_title:
      "A highly performant mobile database, with native edge-to-cloud data sync. Use Realm to build offline-first apps in a fraction of the time.",
    btn_title: "Learn more",
  },
  {
    grid: "grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10",
    grid_cols: "",
    title: "Self-managed in any environment",
    subtitle: "Run MongoDB anywhere, from your laptop to your data center",
    firsticon: <Building />,
    secondicon: <People />,
    icon_title: "Atlast",
    desc_title: "Multi-cloud application data platform",
    desc: "An integrated suite of cloud database services that allow you to address a wide variety of use cases, from transactional to analytical, from search to data visualizations.",
    right_div_icon_title: "Realm",
    right_div_title: "Work with data at the Age",
    right_div_sub_title:
      "A highly performant mobile database, with native edge-to-cloud data sync. Use Realm to build offline-first apps in a fraction of the time.",
    btn_title: "Learn more",
  },
];

function Fullymangeinthecloud() {
  return (
    <div>
      {data.map((item) => {
        return <Fullymanage key={uuid()} {...item} />;
      })}
    </div>
  );
}

export default Fullymangeinthecloud;
