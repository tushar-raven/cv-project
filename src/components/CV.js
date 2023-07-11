import React from "react";

const DisplayCV = (props) => {
  const { formData } = props;

  return (
    <div>
      <div>{formData?.fName}</div>
      <div>{formData?.uniCity}</div>
    </div>
  );
};

export default DisplayCV;
