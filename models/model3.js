const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const Model3Schema = mongoose.Schema({
  title: String,
  totalViews: Number,
  dateUploaded: String,
  channelName: String,
  channelLogoURL; String,
  videoThumbnailURL: String,
  totalTime: Number,
  watchedTimeInSeconds: Number,
  videoURL: String
  
});

const model3 = mongoose.model('Model3', Model3Schema);
  
module.exports = model3;