import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      style={{ color: "red", textTransform: "uppercase" }}
      onClick={onClick}
    >
      {children} shared
    </button>
  );
};

export default Button;
