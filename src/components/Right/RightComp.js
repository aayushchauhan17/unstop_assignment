import React from "react";
import "./rightComp.css";
import TopHeader from "./TopHeader";
import MyAssessment from "./MyAssessment";

function RightComp() {
  return (
    <div className="right-container">
      <TopHeader />
      <MyAssessment />
    </div>
  );
}

export default RightComp;
