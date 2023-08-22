import React from "react";
import "./MyAssessmentBox.css";
import BagImg from "../../assets/images/bagImg.svg";
import Dots from "../../assets/images/dots.svg";
import Cal from "../../assets/images/calendar_today.svg";
import Link from "../../assets/images/link.svg";

function MyAssessmentBox({ add = false }) {
  return (
    <>
      <div className="box-conatainer">
        {add ? (
          <div className="new-ass">
            <h1>+</h1>
            <h2>New Assessment</h2>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
        ) : (
          <div className="new-ass">
            <div className="images">
              <img width="50px" height="50px" src={BagImg} alt="BagImg" />
              <img width="20px" height="20px" src={Dots} alt="Dots" />
            </div>
            <div className="ass_name">
              <h3>Math Assessment</h3>
              <div className="details">
                <p>Job </p>
                <span>|</span>
                <img src={Cal} alt="Cal" />
                <span>20 Apr 2023</span>
              </div>
            </div>
            <div className="bottom-details">
              <div className="time_ques">
                <span>
                  <h3>00</h3>
                  <p>Duration</p>
                </span>
                <span>
                  <h3>00</h3>
                  <p>Questions</p>
                </span>
              </div>
              <div className="bottom-details-right">
                <span>
                  <img width="25px" height="25px" src={Link} alt="link" />
                  <p>Share</p>
                </span>
                <p className="userText">LP</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyAssessmentBox;
