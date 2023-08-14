import React from "react";
import "./HomePage.css";
import LeftNavBar from "../components/Left/LeftNavBar";
import RightComp from "../components/Right/RightComp";

function HomePage() {
  return (
    <span className="main-body">
      <LeftNavBar />
      <RightComp />
    </span>
  );
}

export default HomePage;
