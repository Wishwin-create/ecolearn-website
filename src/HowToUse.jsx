import InstructionCard from "./components/InstructionCard.jsx";
import LearningJourney from "./components/LearningJourney.jsx";
import HelpfulTips from "./components/HelpfulTips.jsx";
import { FaMousePointer, FaBook } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import "./HowToUse.css";
import threebooks from "./assets/threebooks.png";
import bulb from "./assets/bulb.png";



function Instructions({goBack}) {
    return (
        <div className="how-container">
            <img src={threebooks} className="threebooks" />
            <h4 className="small-title">How to Use Ecolearn</h4>
            <h2 className="main-title"> Follow these simple instructions! 🎯</h2>

            
      <div className="card-grid">
        <InstructionCard
          Icon={FaMousePointer}
          title="Click & Explore"
          description="Click on buttons and waste bins to learn more about recycling!"
          color="#3b82f6"
        />

        <InstructionCard
          Icon={FiEye}
          title="Watch & Learn"
          description="See animations showing how waste management helps our planet."
          color="#22c55e"
        />

        <InstructionCard
          Icon={FaBook}
          title="Read Information"
          description="Read fun facts and tips about different types of waste."
          color="#facc15"
        />

        <InstructionCard
          Icon={BsStars}
          title="Have Fun!"
          description="Enjoy learning while becoming an Eco Hero! 🌟"
          color="#a855f7"
        />
      </div>
       

          <div className="screen">
            <LearningJourney />
            <HelpfulTips />
    </div>

    <div className="button-container">
                <button onClick={goBack} className="back-btn">
                    ←  Back To Home
                </button>

            
            </div>
    
      <div className="bulb">
      <img src={bulb} />
      </div>
    </div>

  );
}
export default Instructions;
