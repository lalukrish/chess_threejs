import React from "react";

import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = (props) => {
  const snap = useSnapshot(state);
  console.log("props", props);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {console.log("hd", props.type)}
      {props.title}
    </button>
  );
};

export default CustomButton;
