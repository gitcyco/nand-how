// const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getMainPage: async (req, res) => {
    try {
      console.log("MAIN PAGE!!!!!!!!!!!!!!");
      // const posts = await Post.find({ user: req.user.id });
      res.render("main.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
