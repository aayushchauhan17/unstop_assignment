import React from  'react';
import './MobileSideMenu.css';
import Cross from "../../assets/images/cross.svg";
import NavBox from '../Left/NavBox';
import Dashboard from "../../assets/images/dashboard.svg";
import Note from "../../assets/images/note_alt.svg";
import Quiz from "../../assets/images/quiz.svg";
import Admin from "../../assets/images/admin_meds.svg";


function MobileSideMenu({setShowSideMenu}){
    return(
        <>
        <div className="model-slide-container">
          <div className="model-slide-body">
            <div className="model-slide-menu-header">
              <p>
                Menu
              </p>
              <img onClick={()=>{setShowSideMenu(false)}} width={25} height={25} src={Cross} alt="cross" />
            </div>

            <NavBox title="Dashboard" image={Dashboard} />
            <NavBox title="Assessment" image={Note} isSelected={true} />
            <NavBox title="My Library" image={Quiz} />
            <NavBox title="Round Status" image={Admin} showAdmin={true} />

          </div>
        </div>
        </>
    )
}

export default MobileSideMenu;