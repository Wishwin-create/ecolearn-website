import {useState} from "react";
import './WastePage.css';




function WastePage({goBack,goNext}) {
    const[isClean,setIsClean]=useState(false);

    return (
        <div className="app-2">
            <div className="leaves-bg">
                <span className="leaf">🍃</span>
                <span className="leaf">🍂</span>
                <span className="leaf">🍃</span>
                <span className="leaf">🍂</span>
                <span className="leaf">🍃</span>
            </div>
            <h3 className="title-2">Why waste management matters</h3>

            <div className="card-2">
                {!isClean ? (
                    <div className="env dirty">
                        <div className="emoji">😟</div>
                        <h2>Dirty Environment</h2>
                        <div className="icons">🗑️ 💨 😷</div>

                        <button onClick={()=>setIsClean(true)}>
                            ← See Clean Environment
                        </button>
                    </div>
                ) : (
                    <div className="env clean">
                        <div className="emoji">😊</div>
                        <h2>Clean Environment</h2>
                        <div className="icons">🌳 🌞 🐦</div>
                        <button onClick={()=>setIsClean(false)}>
                            See Dirty Environment →
                        </button>
                    </div>
                )}
               
                <div className="info">
                    💡 Waste can harm animals and nature. Recycling keeps our Earth clean!
                       When we don't recycle, trash piles up and hurts our planet. But when we recycle,
                       we can save the environment! 🌍
                      
                </div>

            </div>

                <div className="pill-container">
                    <div className="pill blue"> ♻️ Recycling Saves Energy</div>
                    <div className="pill green"> 🌳 Protects Wildlife</div>
                </div>
                <div className="pill-container">
                    <div className="pill orange">💚 Keeps Earth Healthy</div>
                </div>
                
               <div className="button-container">
                <button onClick={goBack} className="back-btn">
                    ← Back to Home
                </button>

                <button  className="next-btn" onClick={goNext}>  
                        Next Page →
                    </button>
                </div>

            


        </div>
    );
}




export default WastePage;