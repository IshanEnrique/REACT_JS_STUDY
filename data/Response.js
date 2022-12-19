const successCode = require("./SuccessCodes");
const errorCode = require("./ErrorCodes");
const ERROR_INTERNAL_SERVER_MSG="Internal server error.";
const responses = {
  successResponse: {
    data: {
      successCode: successCode.SUCCESS_,
      successMessage: "Process execution completed sucessfully!",
      status: "SUCCESS",
      details: {},
    },
  },
  failureResponse: {
    error: {
      errorCode: errorCode.ERR_DEFAULT_,
      errorMessage: "Process execution aborted.",
      status: "FAILURE",
    },
  },
};

function createSuccessResponse(successCode, message, data) {
  let successData = JSON.parse(JSON.stringify(responses.successResponse));
  successData.successCode = successCode;
  successData.successMessage = message;
  if (data) {
    successData.data = data;
  }
  return successData;
}

function createErrorResponse(errorCode, message) {
  let errorData = JSON.parse(JSON.stringify(responses.failureResponse));
  errorData.error.errorCode = errorCode;
  errorData.error.errorMessage = message;
  return errorData;
}

module.exports = { responses,ERROR_INTERNAL_SERVER_MSG, createSuccessResponse, createErrorResponse };
