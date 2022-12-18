const express = require("express");
const UserSchema = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const becrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config();

// Create user . No auth required
router.post(
  "/create-user",
  [
    body("name", "Name should contain at least 3 characters.").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email.").isEmail(),
    body("mobile", "Enter a valid mobile")
      .escape()
      .exists({ checkFalsy: true })
      .isLength({ min: 10, max: 10 })
      .matches(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/),
    body(
      "password",
      "Password should contain minimum eight characters, at least one letter, one number and one special character."
    )
      .escape()
      .exists({ checkFalsy: true })
      .isLength({ min: 8 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
  ],
  async (req, res) => {
    try {
      let errors = validationResult(req);
      console.log("Validation Result : " + errors.isEmpty());
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await UserSchema.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: {
            errorCode: "ERR000001",
            errorMessage: "User already registered with provided email.",
            status: "FAILURE",
          },
        });
      }
      const salt = await becrypt.genSalt(10);
      const securePassword = await becrypt.hash(req.body.password, salt);
      user = UserSchema({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        mobile: req.body.mobile,
      });
      console.log("REC_APP_JWT_SECRET : " +process.env.JWT_SECRET);
      let token = jwt.sign(user.id, process.env.JWT_SECRET);
      console.log(" JWT Token : " + token);
      const dbStatus = await user.save();
      console.log("Save status : " + dbStatus);
      res.status(200);
      res.json({
        authToken: token,
        userDetails: {
          name: req.body.name,
          password: "###############",
          email: req.body.email,
          mobile: req.body.mobile,
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
