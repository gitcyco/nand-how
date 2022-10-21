// const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getMainPage: async (req, res) => {
    try {
      console.log("MAIN PAGE");

      if (req.session.views) {
        req.session.views++;
      } else {
        req.session.views = 1;
      }
      req.session.save(function (err) {
        console.log("session saved");
      });

      // const posts = await Post.find({ user: req.user.id });
      res.render("main.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
};
