"use strict";
exports.__esModule = true;
var user = {
    name: "Rahul kumar",
    email: "rahul@bharatkadam.com",
    age: 31,
    isLoggedIn: false
};
function getUser() {
    return user;
}
getUser();
// Here createUser function decleration tells it should strictly return an Object having attributes name and email of type strings but if we return more values directly as shown below then it will show an error but if you passes the return type as an variable then you can happly do .
function createUser() {
    return {
        name: "Rahul kumar",
        email: "rahul@bharatkadam.com",
        age: 31,
        isLoggedIn: false
    };
}
function createUser1() {
    return user; // It doesn't gives any error at this point
}
