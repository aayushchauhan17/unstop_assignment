import React from "react";
import "./rightComp.css";
import TopHeader from "./TopHeader";
import MyAssessment from "./MyAssessment";
import AssessmentOverview from "./AssessmentOverview";

function RightComp() {
  return (
    <div className="right-container">
      <TopHeader />
      <div className="right-bottom-conatainer">
        <AssessmentOverview />
        <MyAssessment />
      </div>
    </div>
  );
}

export default RightComp;
