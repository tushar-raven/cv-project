import React from "react";

const Input = (props) => {
  const { value, type, placeholder, onChange } = props;

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
