import "./ExampleModal.css";

function ExampleModal({title,examples,onClose}){
    return(
        <div className="modal-overlay" onClick={onClose}>
         <div className="modal" onClick={(e) => e.stopPropagation()}>
         <h2>{title}</h2>
         <ul>
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>

          <button className="close-btn" onClick={onClose}>Close</button>
         </div> 
        </div>

    )
}

export default ExampleModal;