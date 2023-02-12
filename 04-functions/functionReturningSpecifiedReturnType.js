"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    //  This funciton should always return a number only
    // return "Value is "+num+2
    // This above line is not the correct return value because it should only return number
}
//  Arrow Funciton with specified Return Type
var getTwoAddedVal = function (num) {
    return num + 2;
};
// Functions that return never.
function handleError(err) {
    throw new Error(err);
}
