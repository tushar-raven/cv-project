import React from "react";
import "../App.css";

const Input = (props) => {
  const { type, name, placeholder, onChange } = props;

  return (
    <input
      className="input"
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
