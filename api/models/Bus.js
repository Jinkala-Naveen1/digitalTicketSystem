const mongoose = require("mongoose");

const BusPassSchema = new mongoose.Schema(
  {
    // Student 10th Details
    sscBoardType: { type: String, required: true },
    sscRegularSupplementary: { type: String, required: true },
    sscYearOfPass: { type: String, required: true },
    sscHallTicketNo: { type: String, required: true },
    dob: { type: Date, required: true },

    // Student Details
    name: { type: String, required: true, maxlength: 20 },
    fatherName: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] },
    aadhaarNo: { type: String, required: true, unique: true },
    whatsappNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true }, // Path to uploaded photo
    isEmployeeChild: { type: String, required: true, enum: ["Yes", "No"] },

    // Residential Address Details
    district: { type: String, required: true },
    mandal: { type: String, required: true },
    village: { type: String, required: true },
    postalCode: { type: String, required: true },
    address: { type: String, required: true, maxlength: 200 },

    // Institution Details
    institutionDistrict: { type: String, required: true },
    institutionMandal: { type: String, required: true },
    institutionName: { type: String, required: true },
    courseName: { type: String, required: true },
    admissionNo: { type: String, required: true, unique: true },
    institutionAddress: { type: String, required: true },

    // Payment Details
    paymentMode: { type: String, required: true },
    passDeliveryMode: { type: String, required: true },

    // Route Details
    collectionCenter: { type: String, required: true },
    passTypeRequired: { type: String, required: true },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("BusPass", BusPassSchema);
