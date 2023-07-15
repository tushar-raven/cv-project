import React from "react";

const DisplayCV = (props) => {
  const {
    formData,
    educationFormData,
    educationNumber,
    experienceFormData,
    experienceNumber,
  } = props;

  const educationDisplay = [];
  for (let i = 0; i < educationNumber; i++) {
    educationDisplay.push(
      <>
        <div>{educationFormData[i]?.uniName}</div>
        <div>{educationFormData[i]?.degree}</div>
        <div>{educationFormData[i]?.uniCity}</div>
        <div>{educationFormData[i]?.uniStartFrom}</div>
        <div>{educationFormData[i]?.uniEnded}</div>
      </>
    );
  }

  const experienceDisplay = [];
  for (let i = 0; i < experienceNumber; i++) {
    experienceDisplay.push(
      <>
        <div>{experienceFormData[i]?.position}</div>
        <div>{experienceFormData[i]?.company}</div>
        <div>{experienceFormData[i]?.city}</div>
        <div>{experienceFormData[i]?.startFrom}</div>
        <div>{experienceFormData[i]?.ended}</div>
      </>
    );
  }

  return (
    <div>
      <div>{formData?.fName}</div>
      <div>{formData?.lName}</div>
      <div>{formData?.title}</div>
      <div>{formData?.address}</div>
      <div>{formData?.phone}</div>
      <div>{formData?.email}</div>
      <div>{formData?.description}</div>

      <div>
        <img src={formData?.photo} alt="Profile" className="photo" />
      </div>
      <>{educationDisplay}</>
      <>{experienceDisplay}</>
    </div>
  );
};

export default DisplayCV;
