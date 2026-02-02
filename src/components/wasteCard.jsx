import React from "react";
import './WasteCard.css';
import BinIcon from "./BinIcon";


function WasteCard({ title,color, icon, onClick }) {
  return (
    <div className="waste-card" style={{backgroundColor: color}} onClick={onClick}>
      <div className="waste-icon">{icon}</div>
      {/* white bin box */}
      <div className="bin-box">
       <BinIcon color={color} size={90} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>Click to see examples!</p>
      </div>
    </div>
  );
}

export default WasteCard;