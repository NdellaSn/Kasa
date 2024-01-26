import "./Collapse.scss";
import up from "../../assets/icons/arrow_up.svg";
import down from "../../assets/icons/arrow_down.svg";
import { useState } from "react";

function Collapse({title,contenu }) {

  const [isOpen, setIsOpen] = useState(false);
  const icon = isOpen ? down : up;

  return (
    <div className="collapse">
      <div
        className="collapse__header"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h2>{title}</h2>
        <img src={icon} alt="" />
      </div>
      {
      isOpen && (
        <div className="collapse__bady">
          {contenu}
        </div>
      )}
    </div>
  );
}
export default Collapse;
