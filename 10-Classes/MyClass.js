var User = /** @class */ (function () {
    function User(_id, name, email, mobile, dob, adhar) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.dob = dob;
        this.adhar = adhar;
    }
    return User;
}());
// Creating Object of User Class
var rahul = new User(11, "Rahul Kumar", "rahul@bk.com", "8865854410", "14-08-1992", "2555XXXXX64");
console.log(rahul);
