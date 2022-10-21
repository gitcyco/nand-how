const cloudinary = require("../middleware/cloudinary");
const Profile = require("../models/Post");
const User = require("../models/User");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      console.log("USERS:", users);
      res.render("users.ejs", { users: users, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
