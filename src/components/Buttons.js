import React from "react";

const AddButton = (props) => {
  const { onChange } = props;

  return <button onChange={onChange}>Add</button>;
};

const DeleteButton = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>Add</button>;
};

export default { AddButton, DeleteButton };
