const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  profilePictuteURL: String,
  userName: String,
  userBio: String,
  userID: String,
  userPersonalWebsite: String,
  userCompanyName: String,
  userLocation: String,
  userTwitterHandle: String,
  userStatus: String,
  userFollowers: Number,
  userFollowing: Number,
});

const userProfile = mongoose.model('userProfile', profileSchema);

module.export = userProfile