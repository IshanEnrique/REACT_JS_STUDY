"use strict";
exports.__esModule = true;
function createUser(user) {
    return user;
}
// Declaring variable of type User -
var user = { _id: "0001", name: "Rahul", email: "rahul@bharatkadam.com", age: 31, isLoggedIn: false };
//  Let try to modify the read only value _id . It does'nt allow us modify read only values
// user._id="1233333"
createUser(user);
