import React from "react";
import "./NavBox.css";

function NavBox({ title, image, isSelected = false, showAdmin = false }) {
  return (
    <div
      className={
        isSelected ? "nav-box-container-selected" : "nav-box-container"
      }
    >
      {showAdmin ? (
        <div className="show-admin">
          <p>Admin</p>
        </div>
      ) : (
        <></>
      )}
      <img src={image} width={25} height={25} alt={image} />
      <p>{title}</p>
    </div>
  );
}

export default NavBox;
