const express = require("express");
const UserSchema = require("../models/User");
const router = express.Router();
const authenticate = require("../middleware/auth");
const response = require("../data/Response");
const errorCodes = require("../data/ErrorCodes");
const successCodes = require("../data/SuccessCodes");

router.get("/user-profile", authenticate, async (req, res) => {
  try {

    let userData = req.user;
    let UserDetails = await UserSchema.findById(userData.id).select(
      ["-password","-_id"]
    );
    if (UserDetails) {
      return res
        .status(200)
        .json(
          response.createSuccessResponse(
            successCodes.SUCCESS_,
            "User Profile fetched successfully!",
            {profile:UserDetails}
          )
        );
    } else {
      return res
        .status(406)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_USER_NOT_EXISTS,
            "No user found with given details."
          )
        );
    }
  } catch (error) {
    console.log("JWT token authentication failed.  : " + error);
    return res
      .status(500)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_500_INTERNAL_SERVER,
          "OOPS! Something went wrong while getting the user-profile details."
        )
      );
  }
});


module.exports = router;