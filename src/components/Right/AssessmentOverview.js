import React from "react";
import "./AssessmentOverview.css";
import ViewAgenda from "../../assets/images/view_agenda.svg";
import Contact from "../../assets/images/contact.svg";
import Score from "../../assets/images/score.svg";
import Total from "../../assets/images/total.svg";

function AssessmentOverview() {

  if(window.innerWidth <= 726){
    return(
      <>
       <div className="overview-container">
        <div className="overview-box">
          <div className="mobile-bar-top">
            <div id="mobile-box-upper" className="box-upper">
              <p className="upper-head">Total Assessment</p>
                <div className="agenda">
                  <img width={30} height={30} src={ViewAgenda} alt="view-agenda" />
                  <p className="overview-number">34</p>
              </div>
            </div>

            <div className="box-upper">
              <p className="upper-head">Total Purpose</p>
              <div className="agenda">
                <img width={40} height={40} src={Total} alt="view-agenda" />
                <p className="overview-number">11</p>
              </div>
            </div>
          </div>

          <div className="center-box">
            <p className="upper-head">Candidates</p>
            <div className="full-bottom-frame">
              <img width={45} height={45} src={Contact} alt="contact" />
              <div className="full-bottom-frame-data">
                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">11,145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Total Candidate</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">1,14</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Who Attamped</p>
                </span>
              </div>
            </div>
          </div>

          <div id="mobile-lower-box" className="center-box">
            <p className="upper-head">Candidates Source</p>
            <div className="full-bottom-frame">
              <img width={45} height={45} src={Score} alt="score" />
              <div className="full-bottom-frame-data">
                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">11,000</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">E-mail</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Social Share</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Unique Link</p>
                </span>
              </div>
            </div>
          </div>

        </div>
       </div>
      </>
    )
  }

  return (
    <div className="container">
      <h2 className="assign">Assessments Overview</h2>
      <div className="overview-container">
        <div className="overview-box">
          {/* ===> */}

          <div className="box-upper">
            <p className="upper-head">Total Assessment</p>
            <div className="agenda">
              <img width={30} height={30} src={ViewAgenda} alt="view-agenda" />
              <p className="overview-number">34</p>
            </div>
          </div>

          <div className="center-box">
            <p className="upper-head">Candidates</p>
            <div className="full-bottom-frame">
              <img width={45} height={45} src={Contact} alt="contact" />
              <div className="full-bottom-frame-data">
                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">11,145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Total Candidate</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">1,14</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Who Attamped</p>
                </span>
              </div>
            </div>
          </div>

          <div className="center-box">
            <p className="upper-head">Candidates Source</p>
            <div className="full-bottom-frame">
              <img width={45} height={45} src={Score} alt="score" />
              <div className="full-bottom-frame-data">
                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">11,000</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">E-mail</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Social Share</p>
                </span>

                <span className="boarder"></span>

                <span className="scors-box">
                  <span className="overview-numbers">
                    <p className="overview-number">145</p>
                    <p className="succed-num">+89</p>
                  </span>
                  <p className="num-bottom-text">Unique Link</p>
                </span>
              </div>
            </div>
          </div>

          <div className="right-box">
            <p className="upper-head">Total Purpose</p>
            <div className="agenda">
              <img width={40} height={40} src={Total} alt="view-agenda" />
              <p className="overview-number">11</p>
            </div>
          </div>

          {/* ==> */}
        </div>
      </div>
    </div>
  );
}

export default AssessmentOverview;
