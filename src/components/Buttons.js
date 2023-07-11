import React from "react";

const AddButton = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>Add</button>;
};

const DeleteButton = (props) => {
  const { onClick } = props;
  return <button onClick={onClick}>Delete</button>;
};

export { AddButton, DeleteButton };
