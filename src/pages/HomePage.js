import React from "react";
import "./HomePage.css";
import LeftNavBar from "../components/Left/LeftNavBar";
import RightComp from "../components/Right/RightComp";
import MobileComp from "../components/mobile/MobileComp";

function HomePage() {
  return (
    <span className="main-body">
      {window.innerWidth <= 726 ? 
      <>
        <MobileComp />
      </> 
      : <>
        <LeftNavBar />
        <RightComp />
        </>
      }
    </span>
  );
}

export default HomePage;
