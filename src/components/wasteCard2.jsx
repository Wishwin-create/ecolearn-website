import StepCard from "./stepcard";
import {
    FaBottleWater,
    FaRegNewspaper,
    FaLeaf,
} from "react-icons/fa6";

const iconMap2 = {
    "Plastic Waste": FaBottleWater,
    "Paper Waste": FaRegNewspaper,
    "Organic Waste": FaLeaf,
};


function WasteCard2({ title,steps=[],color}) {
    const IconComponent = iconMap2[title];
    return(
        <div className="waste-card-2">
            <div className="waste-header-2">
                <div className={`circle ${color}`}>{IconComponent && <IconComponent />}</div>
                <h3>{title}</h3>
            </div>

           <div className="steps-row">
            {steps.map((step, index) => (
                <StepCard 
                    key={index}
                    title={step.title}
                    desc={step.desc}
                    icon={step.icon}
                    color={color}   
                />
            ))}
           </div>
        </div>
    );
}

export default WasteCard2;