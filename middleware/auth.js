const jwt = require("jsonwebtoken");
const errorCodes = require("../data/ErrorCodes");
const response = require("../data/Response");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
  // Getting auth-token from header of the request
  let authToken = req.header("auth-token");
  if (!authToken) {
    return res
      .status(401)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_401_UNAUTHORIZED,
          "You are not authorized to access this resource.",null
        )
      );
  } else {
    try {
      // Validate the JWT auth token and Get the id from the token
      let data = jwt.verify(authToken,process.env.JWT_SECRET);
      req.user = data.user;
      next();
    } catch (error) {
      console.log("JWT token authentication failed.  : " + error);
      return res
        .status(401)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_401_UNAUTHORIZED,
            "You are not authorized to access this resource.",null
          )
        );
    }
  }
};

module.exports = authenticateUser;
