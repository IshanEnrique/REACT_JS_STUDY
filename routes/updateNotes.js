const express = require("express");
const errorCodes = require("../data/ErrorCodes");
const response = require("../data/Response");
const { body, validationResult } = require("express-validator");
const successCode = require("../data/SuccessCodes");
const authenticateUser = require("../middleware/auth");
const router = express.Router();
const NotesSchema = require("../models/Notes");

router.put("/update-notes/:id", authenticateUser, async (req, res) => {
  try {
    // Destructuring the request body
    let { title, description, tag } = req.body;
    let newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // Get existing note to be updated
    let note = await NotesSchema.findById(req.params.id);
    if (!note) {
      return res
        .status(406)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_DATA_NOT_EXISTS,
            "No Note found in the system by given id."
          )
        );
    }
    // Checking the note updater is authenticated user or not
    if (note.user.toString() != req.user.id) {
      return res
        .status(401)
        .json(
          response.createErrorResponse(
            errorCodes.ERR_DATA_NOT_EXISTS,
            "You are not authorized to update this Note."
          )
        );
    }

    // Updating the Note

    let updatedNote = await NotesSchema.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    // Confirming the Note updation status
    if (updatedNote) {
      return res
        .status(200)
        .json(
          response.createSuccessResponse(
            successCode.SUCCESS_,
            "Notes updated successfully!",
            { oldNotes: note, newNote: updatedNote }
          )
        );
    } else {
      return res
        .status(406)
        .json(
          responses.createErrorResponse(
            errorCodes.ERR_DATA_NOT_EXISTS,
            "Something went wrong while updating the Notes.",
            { notes: notes }
          )
        );
    }
  } catch (error) {
    console.log("Something went wrong while updating the notes.  : " + error);
    return res
      .status(500)
      .json(
        response.createErrorResponse(
          errorCodes.ERR_500_INTERNAL_SERVER,
          "OOPS! Something went wrong while updating the Notes details."
        )
      );
  }
});

module.exports = router;
