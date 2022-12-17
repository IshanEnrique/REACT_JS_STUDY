const express = require("express");
const UserSchema = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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
      const user = await UserSchema.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: {
            errorCode: "ERR000001",
            errorMessage: "User already registered with provided email.",
            status: "FAILURE",
          },
        });
      }
      user = UserSchema(req.body);
      const dbStatus = await user.save();
      console.log("Save status : " + dbStatus);
      res.status(200);
      res.send(req.body);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
