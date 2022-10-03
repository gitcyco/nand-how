const cloudinary = require("../middleware/cloudinary");
const Circuit = require("../models/Circuit");
// const Post = require("../models/Post");

module.exports = {
  listCircuits: async (req, res) => {
    console.log("listcircuits");
    try {
      const circuits = await Circuit.find({ user: req.user.id });
      res.json(circuits);
    } catch (error) {
      console.log(error);
    }
  },

  getCircuit: async (req, res) => {
    console.log("getCircuit");
    try {
      // const circuitJSON = await Circuit.find({ title: "Canvas Save", user: req.user.id });
      const circuitJSON = await Circuit.find({ title: "Canvas Save", user: req.user.id });
      res.json(circuitJSON);
    } catch (error) {
      console.log(error);
    }
  },

  createCircuit: async (req, res) => {
    try {
      console.log("createCircuit");

      // console.log("BEFORE: ", req.body);

      // await Circuit.findOneAndUpdate(
      //   { title: req.body.title, user: req.user.id },
      //   {
      //     title: req.body.title,
      //     user: req.user.id,
      //     canvas: req.body.canvas,
      //   },
      //   { upsert: true }
      // );

      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.body.image, { effect: "trim" });

      await Circuit.create({
        title: req.body.title,
        user: req.user.id,
        canvas: req.body.canvas,
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });
      // console.log("RECEIVED JSON:", req.body);
    } catch (error) {
      console.log(error);
    }
  },

  deleteCircuit: async (req, res) => {
    console.log("deleteCircuit");
    try {
      // Find post by id
      let post = await Circuit.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (error) {
      res.redirect("/profile");
    }
  },
};
