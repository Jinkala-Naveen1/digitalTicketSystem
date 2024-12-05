import React, { useState } from "react";
import "./studentApplication.css"
const StudentPassApplication = () => {
  const [formData, setFormData] = useState({
    // Student 10th Details
    sscBoardType: "",
    sscRegularSupplementary: "",
    sscYearOfPass: "",
    sscHallTicketNo: "",
    dob: "",
    // Student Details
    name: "",
    fatherName: "",
    gender: "",
    aadhaarNo: "",
    whatsappNo: "",
    email: "",
    photo: null,
    isEmployeeChild: "",
    // Residential Address Details
    district: "",
    mandal: "",
    village: "",
    postalCode: "",
    address: "",
    // Institution Details
    institutionDistrict: "",
    institutionMandal: "",
    institutionName: "",
    courseName: "",
    admissionNo: "",
    institutionAddress: "",
    // Payment Details
    paymentMode: "",
    passDeliveryMode: "",
    // Route Details
    collectionCenter: "",
    passTypeRequired: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add API call here to submit formData to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>TSRTC Student Metro Pass Application</h1>

      {/* Student 10th Details */}
      <fieldset>
        <legend>1. Student 10th Details</legend>
        <label>
          SSC Board Type:
          <select name="sscBoardType" value={formData.sscBoardType} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="SSC">SSC</option>
            <option value="CBSE">CBSE</option>
          </select>
        </label>
        <label>
          SSC Regular/Supplementary:
          <select
            name="sscRegularSupplementary"
            value={formData.sscRegularSupplementary}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Regular">Regular</option>
            <option value="Supplementary">Supplementary</option>
          </select>
        </label>
        <label>
          SSC Year of Pass:
          <input
            type="text"
            name="sscYearOfPass"
            value={formData.sscYearOfPass}
            onChange={handleInputChange}
          />
        </label>
        <label>
          SSC Hall Ticket No:
          <input
            type="text"
            name="sscHallTicketNo"
            value={formData.sscHallTicketNo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
        </label>
      </fieldset>

      {/* Student Details */}
      <fieldset>
        <legend>2. Student Details</legend>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Father's/Guardian's Name:
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
            Female
          </label>
        </label>
        <label>
          Aadhaar No:
          <input type="text" name="aadhaarNo" value={formData.aadhaarNo} onChange={handleInputChange} />
        </label>
        <label>
          WhatsApp No:
          <input
            type="text"
            name="whatsappNo"
            value={formData.whatsappNo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Photo:
          <input type="file" name="photo" onChange={handleFileChange} />
        </label>
        <label>
          Is Employee Child:
          <label>
            <input
              type="radio"
              name="isEmployeeChild"
              value="Yes"
              checked={formData.isEmployeeChild === "Yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isEmployeeChild"
              value="No"
              checked={formData.isEmployeeChild === "No"}
              onChange={handleInputChange}
            />
            No
          </label>
        </label>
      </fieldset>

      {/* Residential Address Details */}
      <fieldset>
        <legend>3. Residential Address Details</legend>
        <label>
          District:
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mandal:
          <input
            type="text"
            name="mandal"
            value={formData.mandal}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Village:
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      {/* Institution Details */}
      <fieldset>
        <legend>4. Institution Details</legend>
        <label>
          Institution District:
          <input
            type="text"
            name="institutionDistrict"
            value={formData.institutionDistrict}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Institution Mandal:
          <input
            type="text"
            name="institutionMandal"
            value={formData.institutionMandal}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Institution Name:
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Admission No:
          <input
            type="text"
            name="admissionNo"
            value={formData.admissionNo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Institution Address:
          <input
            type="text"
            name="institutionAddress"
            value={formData.institutionAddress}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      {/* Payment Details */}
      <fieldset>
        <legend>5. Payment Details</legend>
        <label>
          Payment Mode:
          <select name="paymentMode" value={formData.paymentMode} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </label>
        <label>
          Pass Delivery Mode:
          <select
            name="passDeliveryMode"
            value={formData.passDeliveryMode}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Home Delivery">Home Delivery</option>
            <option value="Pickup">Pickup</option>
          </select>
        </label>
      </fieldset>

      {/* Route Details */}
      <fieldset>
        <legend>6. Route Details</legend>
        <label>
          Collection Center:
          <input
            type="text"
            name="collectionCenter"
            value={formData.collectionCenter}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pass Type Required:
          <input
            type="text"
            name="passTypeRequired"
            value={formData.passTypeRequired}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentPassApplication;
