"use strict";
exports.__esModule = true;
function createUser(user) {
    return user;
}
// Declaring variable of type User -
var user = { _id: "0001", name: "Rahul", email: "rahul@bharatkadam.com", age: 31,
    cardDetails: {
        cardId: "326428739479234791279431",
        cardNo: "5432-5432-5432-5432",
        cvv: "021",
        from: "02/2023",
        to: "01/2025"
    }
};
//  Let try to modify the read only value _id . It does'nt allow us modify read only values
// user._id="1233333"
createUser(user);
