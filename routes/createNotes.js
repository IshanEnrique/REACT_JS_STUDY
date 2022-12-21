const express = require("express");
const errorCodes = require("../data/ErrorCodes");
const response = require("../data/Response");
const { body, validationResult } = require("express-validator");
const successCode = require("../data/SuccessCodes");
const authenticateUser = require("../middleware/auth");
const router = express.Router();
const NotesSchema = require("../models/Notes");

router.post("/create-notes",[
  body("title", "Title can not be empty.").exists()  
], authenticateUser, async (req, res) => {
  try {
    // Checking for the request body validation status
    let errors = validationResult(req);
    console.log("Validation Result : " + errors.isEmpty());
    // Confirming the successfull validation
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let notesDetails= NotesSchema(req.body);
    notesDetails.user=req.user.id;
    let notes = await notesDetails.save();
    if (notes) {
      return res
        .status(200)
        .json(
          response.createSuccessResponse(
            successCode.SUCCESS_,
            "Notes saved successfully!",
            { notes: notes }
          )
        );
    } else {
      return res
        .status(406)
        .json(
          responses.createErrorResponse(
            errorCodes.ERR_DATA_NOT_EXISTS,
            "Something went wrong while saving the Notes.",
            { notes: notes }
          )
        );
    }
  } catch (error) {
    console.log("Something went wrong while saving the notes.  : " + error);
    return res
      .status(500)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_500_INTERNAL_SERVER,
          "OOPS! Something went wrong while saving the Notes details.",null
        )
      );
  }
});

module.exports = router;
