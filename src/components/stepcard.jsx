import {FaWater,FaWind,FaRecycle,FaPaperclip,FaSun,FaTrash,FaLeaf,FaHourglass,FaSeedling} from "react-icons/fa";

const iconMap = {
    water: <FaWater />,
    wind: <FaWind />,
    recycle: <FaRecycle />,
    clip: <FaPaperclip />,
    sun: <FaSun />,
    trash: <FaTrash />,
    compost: <FaLeaf />,
    wait: <FaHourglass />,
    "use-in-soil": <FaSeedling />,
};
function StepCard({ title,desc,icon,color }) {
    return(
        <div className={`step-card ${color}`}>
            <div className="icon-2">{iconMap[icon]}</div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
}
export default StepCard;