import React from "react";
import "./LeftNavBar.css";
import NavBox from "./NavBox";
import Dashboard from "../../assets/images/dashboard.svg";
import Note from "../../assets/images/note_alt.svg";
import Quiz from "../../assets/images/quiz.svg";
import Admin from "../../assets/images/admin_meds.svg";

function LeftNavBar() {
  return (
    <>
      <div className="nav-container">
        <NavBox title="Dashboard" image={Dashboard} />
        <NavBox title="Assessment" image={Note} isSelected={true} />
        <NavBox title="My Library" image={Quiz} />
        <span className="nav-divider"></span>
        <NavBox title="Round Status" image={Admin} showAdmin={true} />
      </div>
    </>
  );
}

export default LeftNavBar;
