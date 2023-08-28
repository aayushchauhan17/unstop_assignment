import React from "react";
import "./MyAssessmentBox.css";
import BagImg from "../../assets/images/bagImg.svg";
import Dots from "../../assets/images/dots.svg";
import Cal from "../../assets/images/calendar_today.svg";
import Link from "../../assets/images/link.svg";
import Add from "../../assets/images/add.svg";
import Cross from "../../assets/images/cross.svg";


function MyAssessmentBox({ add = false }) {
  const [showModel, setShowModel] = React.useState(false);
  return (
    <>
      <div className="box-conatainer">
        {add ? (
          <div className="new-ass">
            <img onClick={()=>{setShowModel(true)}} className="add-img" src={Add} alt="add" />
            <h2>New Assessment</h2>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
        ) : (
          <div className="new-ass">
            {window.innerWidth <= 726? <div className="mobile-view-box" >
              <div className="images">
                <img width="60px" height="60px" src={BagImg} alt="BagImg" />
                <div className="ass_name">
                  <h3>Math Assessment</h3>
                  <div className="details">
                    <p>Job </p>
                    <span>|</span>
                    <img src={Cal} alt="Cal" />
                    <span>20 Apr 2023</span>
                  </div>
                </div>
              </div>
              <img className="mobile-view-box-img" width="15px" height="15px" src={Dots} alt="Dots" /> 

            </div> : <>
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
            </> }
            
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
                  <img width={window.innerWidth <= 726 ? 16 : 25 } height={window.innerWidth <= 726 ? 16 : 25} src={Link} alt="link" />
                  <p>Share</p>
                </span>
                <div>
                  <p className="userText">LP</p>
                </div>
                <p className="userNo">+356</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {showModel && <>
        <div className="model-container">
          <div className="model-body">
            <div className="model-header">
              <h1>
                Create New Asignment
              </h1>
              <img onClick={()=>{
                setShowModel(false);
              }} width={32} height={30} src={Cross} alt="cross" />
            </div>
            <div className="model-body">
              <div className="model-input-box">
                <p>Name of assessment</p>
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="model-input-box">
                <p>Purpose of the test isnt</p>
                <select>
                  <option>Select</option>
                  <option>Option2</option>
                  <option>Option3</option>
                </select>
              </div>
              <div className="model-input-box">
                <p>Purpose of the test isnt</p>
                <select>
                  <option>Select</option>
                  <option>Option2</option>
                </select>
              </div>

              <div className="model-input-box">
                <p>Skills</p>
                <div className="model-skills">
                  <span className="model-select-skill">
                    <p>UI/UX and Design</p>
                    <img width={18} height={18} src={Cross} alt="cross" />
                  </span>

                  <span className="model-select-skill">
                    <p>No of Question</p>
                    <img width={18} height={18} src={Cross} alt="cross" />
                  </span>

                  <span className="model-select-skill">
                    <p>Web Development</p>
                    <img width={18} height={18} src={Cross} alt="cross" />
                  </span>

                  <span className="model-select-skill">
                    <p>UI/UX and Design</p>
                    <img width={18} height={18} src={Cross} alt="cross" />
                  </span>

                  <span className="model-select-skill">
                    <p>Web Development</p>
                    <img width={18} height={18} src={Cross} alt="cross" />
                  </span>
                </div>
                <input className="model-skill-input" type="text" placeholder="Type Here" />
              </div>

              <div className="model-input-box">
                <p>Duration of assessment</p>
                <input type="text"  placeholder="HH:MM:SS" />
              </div>
            </div>

            <div className="model-save-button">
              <button>Save</button>
            </div>
          </div>
        </div>
      </>}
    </>
  );
}

export default MyAssessmentBox;
