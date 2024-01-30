import "./Collapse.scss";
import up from "../../assets/icons/arrow_up.svg";
import down from "../../assets/icons/arrow_down.svg";
import { useState } from "react";

function Collapse({ title, contenu }) {
    // isopen garde l'état du collapse: ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);
    // const qui garde l'icon qui doit etre affiché.
    // si le collopse est ouvert l'icon prend l'image down
    // sinn il prend l'image up
    const icon = isOpen ? down : up;

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={() => { setIsOpen(!isOpen); }}>
                <h2>{title}</h2>
                <img src={icon} alt="icon " />
            </div>
            {
                isOpen && (
                    <div className="collapse__body">
                        {contenu}
                    </div>
                )}
        </div>
    );
}
export default Collapse;
