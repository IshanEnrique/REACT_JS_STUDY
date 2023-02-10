"use strict";
// Function without specifying type
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
console.log("Function without specifying type : " + addTwo(5));
// But the problem will start when some one consumer of this function passes value other than a number . Then this should be not the correct.
// To overcome this problem we can go the functions accepting the typed input.
function addTwoWithType(num) {
    return num + 2;
}
console.log("Function accepting with Typed parameter : " + addTwoWithType(5));
var signUpArrowFunction = function (name, email, age, isPaid) {
    // TODO:
};
console.log("Arrow function example with Typed accepting parameter  : " + signUpArrowFunction("Rahul", "rahul@bharatkadam.com", 31, false));
// Function with optional accepting parameter
var signUpArrowFunctionWithOptionalParam = function (name, email, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
console.log("Arrow function with typed input optional parameter : " + signUpArrowFunctionWithOptionalParam("Rahul", "rahul@bharatkadam.com", 31));
console.log("Arrow function with typed input optional complete parameter : " + signUpArrowFunctionWithOptionalParam("Rahul", "rahul@bharatkadam.com", 31, true));
