import React from "react";

const Input = (props) => {
  const { type, name, placeholder, onChange } = props;

  return (
    <input
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
