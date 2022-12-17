const express = require("express");
const UserSchema = require("../models/User");
const router = express.Router();

// Create user
router.post("/", async (req, res) => {
  try {
    const user = UserSchema(req.body);
    const dbStatus = await user.save();
    console.log("Save status : "+dbStatus);
    res.status(200);
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
