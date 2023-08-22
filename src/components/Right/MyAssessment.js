import React from "react";
import MyAssessmentBox from "./MyAssessmentBox";
import "./MyAssessment.css";

function MyAssessment() {
  return (
    <div className="container">
      <h2 className="assign">My Assessment</h2>
      <div className="box">
        <MyAssessmentBox add={true} />
        <MyAssessmentBox />
        <MyAssessmentBox />
      </div>
    </div>
  );
}

export default MyAssessment;
