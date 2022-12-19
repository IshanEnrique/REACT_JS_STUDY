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

// Create user . No auth required
router.post(
  "/create-user",

  // Express Valdiation for request body params
  [
    body("name", "Name should contain at least 3 characters.").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email.").isEmail(),
    // providing custom regex for validation
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
      // Checking for the request body validation status
      let errors = validationResult(req);
      console.log("Validation Result : " + errors.isEmpty());
      // Confirming the successfull validation
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // Checking for the user existance in by email. If user exists then returning the 400 Bad request
      let user = await UserSchema.findOne({ email: req.body.email });
      if (user) {
        let errorResponse = response.createErrorResponse(
          errorCodes.ERR_USER_ALREADY_EXISTS,
          "User already registered with the provided email."
        );

        return res.status(400).json({
          errorResponse: errorResponse,
        });
      }

      // Generating BCrypt Salt
      const salt = await becrypt.genSalt(10);
      // Converting the password into Hashed
      const securePassword = await becrypt.hash(req.body.password, salt);
      user = UserSchema({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        mobile: req.body.mobile,
      });

      // Saving record into the DB.
      const dbStatus = await user.save();
      // Confirming the data persistance status
      if (dbStatus) {
        // Creating auth data for JWT tokenization
        let authData = {
          user: {
            id: user.id,
          },
        };
        console.log("Auth Data : " + JSON.stringify(authData));
        // Generating auth token by signing of with the JWT Secret
        let token = jwt.sign(authData, process.env.JWT_SECRET);

        let responseData = {
          authToken: token,
          userDetails: {
            name: req.body.name,
            password: "###############",
            email: req.body.email,
            mobile: req.body.mobile,
          },
        };
        // Generating final success response
        res.status(200);
        res.json(
          response.createSuccessResponse(
            successCodes.SUCCESS_,
            "Congratulations , your registration completed successfully. Now you are the part of the system!",
            responseData
          )
        );
      } else {
        res.status(406);
        res.json(
          response.createErrorResponse(
            errorCodes.ERR_DEFAULT_,
            "Sorry , System is unable to process your request."
          )
        );
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_500_INTERNAL_SERVER,
            response.ERROR_INTERNAL_SERVER_MSG
          )
        );
    }
  }
);

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
              "Login failed. Please use valid credentials."
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
                "Login failed. Please use valid credentials."
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
            response.ERROR_INTERNAL_SERVER_MSG
          )
        );
    }
  }
);
module.exports = router;
