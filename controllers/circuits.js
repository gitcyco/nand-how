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
      console.log("getCircuit id:", req.params.id);
      // const circuitJSON = await Circuit.find({ title: "Canvas Save", user: req.user.id });
      const circuitJSON = await Circuit.findById({ _id: req.params.id });

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
        public: req.body.public,
      });
      // console.log("RECEIVED JSON:", req.body);
    } catch (error) {
      console.log(error);
    }
  },

  deleteCircuit: async (req, res) => {
    console.log("deleteCircuit", req.body.circuitId);
    try {
      // Find Circuit by id
      let circuit = await Circuit.findById({ _id: req.body.circuitId });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(circuit.cloudinaryId);
      // Delete Circuit from db
      await Circuit.remove({ _id: req.body.circuitId });
      console.log("Deleted Circuit");
      res.json("Deleted It");
    } catch (error) {
      console.log(error);
    }
  },
};
