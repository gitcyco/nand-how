const cloudinary = require("../middleware/cloudinary");
// const Profile = require("../models/Post");
const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

module.exports = {
  getProfile: async (req, res) => {
    try {
      // const posts = await Post.find({ user: req.user.id });
      const user = await User.findOne({ _id: req.user.id }, async function (err, user) {
        console.log("User Found");
      }).clone();

      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  updateProfile: async (req, res) => {
    try {
      const validationErrors = [];

      // Does the user want to change their email?
      if (req.body.inputEmail) {
        if (!validator.isEmail(req.body.inputEmail))
          validationErrors.push({ msg: "Please enter a valid email address." });
        else
          req.body.inputEmail = validator.normalizeEmail(req.body.inputEmail, {
            gmail_remove_dots: false,
          });
      }

      // Does the user want to change their password?
      if (req.body.oldPassword) {
        if (!validator.isLength(req.body.newPassword, { min: 8 }))
          validationErrors.push({
            msg: "Password must be at least 8 characters long",
          });
        if (req.body.newPassword !== req.body.newPasswordConfirm)
          validationErrors.push({ msg: "Passwords do not match" });
      }

      // If there are any validation errors, bounce the user back to the profile page
      if (validationErrors.length) {
        req.flash("errors", validationErrors);
        console.log(validationErrors);
        return res.redirect("/profile");
      }

      let passwordNotFound = false;
      if (req.body.oldPassword) {
        const userPassword = await User.findOne({ _id: req.user.id }, async function (err, user) {
          console.log("User Found");
          try {
            let check = await bcrypt.compare(req.body.oldPassword, user.password);
            if (check) {
              // console.log("Password matches!", req.body.oldPassword, user.password, check);
            } else {
              // console.log("Password DOES NOT match!", req.body.oldPassword, user.password, check);
              passwordNotFound = true;
            }
          } catch (err) {
            console.log(err);
            // res.status(500).send()
          }
        });
      }

      // Build the update object with any provided changes
      const updatedUser = {};
      if (req.body.about) updatedUser["about"] = req.body.about;
      if (req.body.inputEmail) updatedUser["email"] = req.body.inputEmail;
      if (req.body.inputLocation) updatedUser["location"] = req.body.inputLocation;
      if (req.body.newPasswordConfirm) updatedUser["password"] = req.body.newPasswordConfirm;

      // Was a file uploaded? (Profile image)
      if (req.file) {
        console.log("file:", req.file.path);
        const userImage = await User.findById({ _id: req.user.id });

        // Delete existing image
        if (userImage.cloudinaryId) {
          console.log("CURRENT IMAGE ID:", userImage.cloudinaryId, userImage.image);
          // Delete image from cloudinary
          await cloudinary.uploader.destroy(userImage.cloudinaryId);
        }

        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        if (result.secure_url) updatedUser["image"] = result.secure_url;
        if (result.public_id) updatedUser["cloudinaryId"] = result.public_id;
      }

      // console.log("updateProfile:", req.body);
      // console.log("userId:", req.user);
      // console.log("updatedUser:", updatedUser);

      let userFound = false;
      if (req.body.inputEmail) {
        await User.findOne({ email: req.body.inputEmail }, (err, existingUser) => {
          if (existingUser) {
            console.log("EXISTING EMAIL:", req.body.inputEmail);
            req.flash("errors", {
              msg: "Account with that email address already exists.",
            });
            userFound = true;
          }
        }).clone();
      }

      // User entered an email that already exists, so do not change anything and bail OR
      // User entered a password that does not match their current password, so do not change anything and bail
      if (userFound || passwordNotFound) return res.redirect("/profile");

      // const user = await User.findById(req.user.id);
      await User.updateOne({ _id: req.user.id }, updatedUser);
      const user = await User.findById(req.user.id);

      console.log("user from db:", user);
      // res.render("profile.ejs", { user: req.user });
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
      res.redirect("/profile");
    }
  },
};
