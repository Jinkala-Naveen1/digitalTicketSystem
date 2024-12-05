import React, { useState } from "react";
import "./userapplication.css";

const UserPassForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    fatherName: "",
    gender: "",
    aadhaarNo: "",
    whatsappNo: "",
    email: "",
    photo: null,
    address: "",
    district: "",
    mandal: "",
    village: "",
    pincode: "",
    city: "",
    passType: "",
    paymentMode: "",
    deliveryMode: "",
    collectionCenter: "",
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
    console.log("Form Data Submitted:", formData);
    // Add your API call logic here
  };

  return (
    <form className="bus-pass-form" onSubmit={handleSubmit}>
      <h1 className="form-title">TSRTC Metro Pass Application</h1>

      {/* Applicant Details */}
      <fieldset>
        <legend>Applicant Details</legend>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Father's / Guardian's Name *</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender *</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
              required
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
              required
            />
            Female
          </div>
        </div>
        <div className="form-group">
          <label>Aadhaar No *</label>
          <input
            type="text"
            name="aadhaarNo"
            value={formData.aadhaarNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>WhatsApp No *</label>
          <input
            type="text"
            name="whatsappNo"
            value={formData.whatsappNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Photo *</label>
          <input type="file" name="photo" onChange={handleFileChange} required />
        </div>
      </fieldset>

      {/* Residential Address Details */}
      <fieldset>
        <legend>Residential Address Details</legend>
        <div className="form-group">
          <label>Applicant's Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>District *</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mandal *</label>
          <input
            type="text"
            name="mandal"
            value={formData.mandal}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Village *</label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode *</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>
      </fieldset>

      {/* Pass Type Details */}
      <fieldset>
        <legend>Pass Type Details</legend>
        <div className="form-group">
          <label>City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pass Type *</label>
          <select
            name="passType"
            value={formData.passType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>
      </fieldset>

      {/* Payment & Collection Details */}
      <fieldset>
        <legend>Mode of Payment & Pass Collection</legend>
        <div className="form-group">
          <label>Payment Mode *</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pass Delivery Mode *</label>
          <select
            name="deliveryMode"
            value={formData.deliveryMode}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Delivery Mode</option>
            <option value="Home Delivery">Home Delivery</option>
            <option value="Pickup">Pickup</option>
          </select>
        </div>
        <div className="form-group">
          <label>Collection Center *</label>
          <input
            type="text"
            name="collectionCenter"
            value={formData.collectionCenter}
            onChange={handleInputChange}
            required
          />
        </div>
      </fieldset>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserPassForm;
