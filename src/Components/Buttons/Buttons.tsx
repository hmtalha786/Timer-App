import React from "react";
import "./Buttons.css";

type buttonType = {
  title: string;
  click: () => void;
  disable: boolean;
};
const Buttons: React.FC<buttonType> = ({
  title,
  click,
  disable,
}) => {
  return (
    <button disabled={disable} className="actionBtn" onClick={click}>
      {title}
    </button>
  );
};

export default Buttons;
