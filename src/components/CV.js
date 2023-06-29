import React from "react";

const DisplayCV = (props) => {
  const { fName, lName, title } = props;

  return (
    <>
      <div>{fName}</div>
      <div>{lName}</div>
      <div>{title}</div>
    </>
  );
};

export default DisplayCV;
