"use strict";
// Class with Private and Public Data Member
exports.__esModule = true;
// 1st way of Decleration
var UserWithPublicPrivate = /** @class */ (function () {
    function UserWithPublicPrivate(email, name, aadhar) {
        this.email = email;
        this.name = name;
        this.aadhar = aadhar;
    }
    UserWithPublicPrivate.prototype.showUserDetails = function () {
        console.log("{Email : ".concat(this.email, " , Name : ").concat(this.name, " , Adhar : ").concat(this.aadhar, "}"));
    };
    return UserWithPublicPrivate;
}());
var Rahul = new UserWithPublicPrivate("rahul@bharatkadam.com", "Rahul Kumar", "2555XXXXXX64");
Rahul.showUserDetails();
// 2nd way of decleration
var UserWithPublicPrivate2ndWay = /** @class */ (function () {
    function UserWithPublicPrivate2ndWay(email, name, aadhar) {
        this.email = email;
        this.name = name;
        this.aadhar = aadhar;
    }
    UserWithPublicPrivate2ndWay.prototype.showUserDetails = function () {
        console.log("{Email : ".concat(this.email, " , Name : ").concat(this.name, " , Adhar : ").concat(this.aadhar, "}"));
    };
    return UserWithPublicPrivate2ndWay;
}());
var Rahul1 = new UserWithPublicPrivate2ndWay("rahul@bharatkadam.com", "Rahul Kumar", "2555XXXXXX64");
Rahul1.showUserDetails();
