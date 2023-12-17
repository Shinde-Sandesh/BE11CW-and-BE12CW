const mongoose = require('mongoose');

const identityCardSchema = mongoose.Schema({
  registrationNumber: String,
  studentId: Number,
  studentImageURL: String,
  studentName: String,
  fatherOrGuardianName: String,
  Class: String,
  emergencyContactNumber: Number
})

const identityCard = mongoose.model('identityCard', identityCardSchema);

model.export = identityCard;