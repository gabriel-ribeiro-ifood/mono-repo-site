import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      style={{ color: "green", textTransform: "uppercase" }}
      onClick={onClick}
    >
      {children} mx
    </button>
  );
};

export default Button;
