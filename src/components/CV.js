import React from "react";

const DisplayCV = (props) => {
  const {
    fName,
    lName,
    title,
    address,
    phone,
    universityName,
    degree,
    uniCity,
  } = props;

  return (
    <div>
      <div>{fName}</div>
      <div>{lName}</div>
      <div>{title}</div>
      <div>{address}</div>
      <div>{phone}</div>
      <div>{universityName}</div>
      <div>{degree}</div>
      <div>{uniCity}</div>
    </div>
  );
};

export default DisplayCV;
