import { useState } from "react";
import Button from "./components/Button.jsx";
import WastePage from "./WastePage.jsx";
import TypesOfWastePage from "./typesOfWastes.jsx";
import HowToRecycle from "./HowToRecycle.jsx";
import Instructions from "./HowToUse.jsx";


  
function App() {
  const [page, setPage] = useState("home");

  
  if (page === "waste") {
    return <WastePage goBack={() => setPage("home")} goNext={() => setPage("types")} />;
  }

  if (page === "instructions") {
    return <Instructions goBack={() => setPage("home")} />;
  }
  if (page === "types") {
    return <TypesOfWastePage goBack={() => setPage("waste")} goNext={() => setPage("howto")} />;
  }
  if (page === "howto") {
    return <HowToRecycle goBack={() => setPage("types")} goNext={()=>setPage("home")} />;
  }


  return (
    

    <div className="app">
      
      
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="sun"></div>

      <div className="container">
        <h1 >Ecolearn</h1>
        <h2>Let's Save the Planet! 🌍</h2>

        <Button className="btn" text = "Start Learning" color="#22c55e" onClick={()=>setPage("waste")} />
        <Button text = "Instructions" color="#3b82f6" onClick={()=>setPage("instructions")}/>
        <Button text = "Exit" color="#f59e0b" />
      </div>
      <div className="trees">
        {/*far trees*/}
        <img src="src/assets/tree1.png" alt="Tree 1" className="tree tree-far"/>
        <img src="src/assets/tree1.png" alt="Tree 2" className="tree tree-far"/>
        
        {/*mid trees*/}
        <img src="src/assets/tree2.png" alt="Tree 3" className="tree tree-mid"/>
        <img src="src/assets/tree2.png" alt="Tree 4" className="tree tree-mid"/>
        {/*near trees*/}
        <img src="src/assets/tree1.png" alt="Tree 5" className="tree tree-near"/>
        <img src="src/assets/tree1.png" alt="Tree 6" className="tree tree-near"/>

      </div>
      </div>
  );
}


export default App;