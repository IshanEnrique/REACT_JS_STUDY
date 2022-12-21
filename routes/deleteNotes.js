const express = require("express");
const errorCodes = require("../data/ErrorCodes");
const response = require("../data/Response");
const { body, validationResult } = require("express-validator");
const successCode = require("../data/SuccessCodes");
const authenticateUser = require("../middleware/auth");
const router = express.Router();
const NotesSchema = require("../models/Notes");

router.delete("/delete-notes/:id", authenticateUser, async (req, res) => {
  try {
    
    // Get existing note to be updated
    let note = await NotesSchema.findByIdAndDelete(req.params.id);
    console.log("Delete Notes : "+JSON.stringify(note));
    if (note) {
      return res
        .status(200)
        .json(
          response.createSuccessResponse(
            successCode.SUCCESS_,
            "Note removed from the system by given id.",
            null
          )
        );
    }
  } catch (error) {
    console.log("Something went wrong while deleting the notes.  : " + error);
    return res
      .status(500)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_500_INTERNAL_SERVER,
          "OOPS! Something went wrong while deleting the Notes details.",null
        )
      );
  }
});

module.exports = router;
