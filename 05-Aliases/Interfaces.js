"use strict";
exports.__esModule = true;
function createUser(user) {
    var user1 = { name: user.name, email: user.email, age: 31, isLoggedIn: false };
    return user1;
}
createUser({ name: "Rahul", email: "rahul@bharatkadam" });
function createUser1(user) {
    return { name: user.name, email: user.email, age: user.age, isLoggedIn: user.isLoggedIn };
}
createUser1({ name: "Rahul", email: "rahul@bharatkadam.com", age: 31, isLoggedIn: false });
