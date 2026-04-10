// src/typesOfWastes.jsx
import React,{useState} from "react";
import WasteCard from "./components/wasteCard";
import ExampleModal from "./components/ExampleModal.jsx";
import { FaRecycle } from "react-icons/fa";
import {GiThreeLeaves} from "react-icons/gi";
import { AiOutlineFile } from "react-icons/ai";
import "./typesOfWastes.css";



function TypesOfWastes({goBack, goNext}) {
  const [selectedWaste, setSelectedWaste] = useState(null);
  const wasteData={
    Plastic: {
      title: "Plastic Waste Examples",
      examples:["Plastic bottles", "Polythene bags", "Food wrappers", "Plastic cups"]
    },
    Organic: {
      title: "Organic Waste Examples",
      examples:["Food scraps", "Garden waste", "Leaves", "Fruit peels"]
    },
    Paper: {
      title: "Paper Waste Examples",
      examples:["Newspapers", "Magazines", "Books", "Paper bags"]
    }
  
  };

  return (
    <div className="app-3">
      <div className="bg-recycle">
        <FaRecycle/>
      </div>
      <h2>Learn the Types of Waste</h2>
      <p>Click on each bin to see examples!👇</p>
      <div className="card-container">
        <WasteCard 
           title="Plastic Waste"
            color="#2e6ee6"
          icon={<FaRecycle />}
          onClick={() => setSelectedWaste("Plastic")}
        />
        <WasteCard
          title="Organic Waste"
          color="#25d755"
          icon={<GiThreeLeaves />}
          onClick={() => setSelectedWaste("Organic")}
        />
        <WasteCard
          title="Paper Waste"
          color="#f5c60b"
          icon={<AiOutlineFile />}
          onClick={() => setSelectedWaste("Paper")}
        />
    </div>
     <div className="button-container">
                <button onClick={goBack} className="back-btn">
                    ←  Back 
                </button>

                <button  className="next-btn" onClick={goNext}>  
                        Next Page →
                    </button>
    </div>

    {selectedWaste && (
      <ExampleModal
        title={wasteData[selectedWaste].title}
        examples={wasteData[selectedWaste].examples}
        onClose={() => setSelectedWaste(null)}
      />     
    )}   
    </div>
    
  );
    
}

export default TypesOfWastes;
