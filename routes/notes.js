const express = require("express");
const errorCodes = require("../data/ErrorCodes");
const response = require("../data/Response");
const successCode = require("../data/SuccessCodes");
const authenticateUser = require("../middleware/auth");
const router = express.Router();
const NotesSchema = require("../models/Notes");

router.get("/get-all-notes", authenticateUser, async (req, res) => {
  try {
    let notes = await NotesSchema.find({user:req.user.id});
    if (notes) {
      return res
        .status(200)
        .json(
          response.createSuccessResponse(
            successCode.SUCCESS_,
            "All notes fetched!",
            { notes: notes }
          )
        );
    } else {
      return res
        .status(406)
        .json(
          responses.createErrorResponse(
            errorCodes.ERR_DATA_NOT_EXISTS,
            "No notes created yet.",
            { notes: notes }
          )
        );
    }
  } catch (error) {
    console.log("Something went wrong while fetching all notes.  : " + error);
    return res
      .status(500)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_500_INTERNAL_SERVER,
          "OOPS! Something went wrong while getting all Notes details.",null
        )
      );
  }
});

module.exports = router;
