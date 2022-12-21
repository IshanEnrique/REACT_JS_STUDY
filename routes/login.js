const express = require("express");
const UserSchema = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const becrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const response = require("../data/Response");
const errorCodes = require("../data/ErrorCodes");
const successCodes = require("../data/SuccessCodes");

require("dotenv").config();


// Login api
router.post(
  "/login",
  [
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Password field can not be blank.").exists(),
  ],
  async (req, res) => {
    try {
      let errors = validationResult(req);
      console.log("Validation Result : " + errors.isEmpty());
      // Confirming the successfull validation
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let { email, password } = req.body;
      // Fetching the User details from DB by email
      let user = await UserSchema.findOne({ email });

      if (!user) {
        return res
          .status(406)
          .json(
            response.createErrorResponse(
              errorCodes.ERR_USER_NOT_EXISTS,
              "Login failed. Please use valid credentials.",null
            )
          );
      } else {
        // Checking the provided password with fetched user's password.
        let isValidUser = await becrypt.compare(password, user.password);
        if (!isValidUser) {
          return res
            .status(406)
            .json(
              response.createErrorResponse(
                errorCodes.ERR_USER_NOT_EXISTS,
                "Login failed. Please use valid credentials.",null
              )
            );
        } else {
          let authData = {
            user: {
              id: user.id,
            },
          };

          // Generating auth token by signing of with the JWT Secret
          let token = jwt.sign(authData, process.env.JWT_SECRET);
          let responseData = {
            authToken: token,
          };
          res
            .status(200)
            .json(
              response.createSuccessResponse(
                successCodes.SUCCESS_,
                "Congratulations , your login credentials are successfully validated. Now you can consume services!",
                responseData
              )
            );
        }
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_500_INTERNAL_SERVER,
            response.ERROR_INTERNAL_SERVER_MSG,null
          )
        );
    }
  }
);
module.exports = router;
