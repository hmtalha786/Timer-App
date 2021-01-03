import React from "react";
import "./actionButton.css";
const Buttons: React.FC<{
  title: string;
  click: () => void;
  disable: boolean;
}> = ({ title, click, disable }) => {
  return (
    <button disabled={disable} className="actionBtn" onClick={click}>
      {title}
    </button>
  );
};

export default Buttons;
