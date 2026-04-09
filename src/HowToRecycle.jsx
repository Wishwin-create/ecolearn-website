import './HowToRecycle.css';
import WasteCard2 from "./components/wasteCard2";

function HowToRecycle({goBack,goNext}) {
  return(
    <div className="app-4">
      <h3 className="subtitle-4">How to Recycle These Wastes?</h3>
        <h2 className="title-4">Follow these simple steps! 🌟</h2>
      
      <WasteCard2 
        title="Plastic Waste"
        color="blue"
        steps={[
          { title: "Wash", desc: "Clean with water", icon: "water" },
          { title: "Dry", desc: "Let it air dry", icon: "wind" },
          { title: "Recycle", desc: "Put in blue bin", icon: "recycle" },
        ]}
      />

      <WasteCard2 
        title="Paper Waste"
        color="yellow"
        steps={[{ title: "Remove clips", desc: "No metal", icon: "clip" },
          { title: "Keep dry", desc: "Avoid water", icon: "sun" },
          { title: "Recycle", desc: "Put in yellow bin", icon: "trash" },
        ]}
      />  

      <WasteCard2 
        title="Organic Waste"
        color="green"
        steps={[
          { title: "Compost", desc: "Use in compost bin", icon: "compost" },
          { title: "wait", desc: "Let it decompose", icon: "wait" },
          { title: "Use in soil", desc: "Great for plants!", icon: "use-in-soil" },
        ]}
      /> 

      <div className="reminder-box">
        <div className="emoji">🌟</div>
        <h3>Remember!</h3>
        <p>Always sort your waste correctly. When in doubt, ask an adult! Together we can make the Earth cleaner and healthier! 💚</p>
      </div>
      <div className="button-container">
                <button onClick={goBack} className="back-btn" style={{width:"120px"}}>
                    ←  Back 
                </button>

                <button  className="next-btn" onClick={goNext}>  
                        Finish Learning →
                    </button>
    </div> 

    </div>

  );
}
export default HowToRecycle;