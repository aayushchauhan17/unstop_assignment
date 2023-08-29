import React from 'react';
import './MyAssessmentBox.css';
import Cross from "../../assets/images/cross.svg";

function Model({setShowModel =()=>{}}){

    return (
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
    )
}

export default Model;