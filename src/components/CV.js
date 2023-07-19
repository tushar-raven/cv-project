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
      <div className="education-box">
        <div className="time-box">
          <div>{educationFormData[i]?.uniStartFrom}</div>
          <div>-</div>
          <div>{educationFormData[i]?.uniEnded}</div>
        </div>
        <div className="degree-box">
          <div>{educationFormData[i]?.uniName}</div>
          <div className="degree-text">
            Degree: {educationFormData[i]?.degree}
          </div>
          <div className="city-text">City: {educationFormData[i]?.uniCity}</div>
        </div>
      </div>
    );
  }

  const experienceDisplay = [];
  for (let i = 0; i < experienceNumber; i++) {
    experienceDisplay.push(
      <div className="experience-box">
        <div className="time-box">
          <div>{experienceFormData[i]?.startFrom}</div>
          <div>-</div>
          <div>{experienceFormData[i]?.ended}</div>
        </div>
        <div className="company-box">
          <div className="position-text">{experienceFormData[i]?.position}</div>
          <div className="city-text">
            {experienceFormData[i]?.company}, {experienceFormData[i]?.city}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cv" id="cv">
      <div className="name-box">
        <div className="name">
          <div className="name-text">{formData?.fName}</div>
          <div className="name-text">{formData?.lName}</div>
        </div>
        <div className="title-text">{formData?.title}</div>
      </div>

      <div className="details-box">
        <div className="left-box">
          <div className="head-text">Description</div>
          <div className="divider"></div>
          <div className="description-text">{formData?.description}</div>
          <div className="head-text">Education</div>
          <div className="divider"></div>
          <>{educationDisplay}</>
          <div className="head-text">Experience</div>
          <div className="divider"></div>
          <>{experienceDisplay}</>
        </div>
        <div className="right-box">
          <div className="image-box">
            <img src={formData?.photo} alt="" className="photo" />
          </div>
          <div className="head-text">Personal Details</div>
          <div className="divider"></div>
          <div className="detail-head-text">Address</div>
          <div className="detail-text">{formData?.address}</div>
          <div className="detail-head-text">Phone Number</div>
          <div className="detail-text">{formData?.phone}</div>
          <div className="detail-head-text">Email</div>
          <div className="detail-text">{formData?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCV;
