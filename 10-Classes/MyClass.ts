
class User {
   readonly _id: number
    name: string
    email: string
    mobile: string
    dob: string
    adhar?: string

    constructor(_id: number, name: string, email: string, mobile: string, dob: string, adhar?: string    ) {

        this._id = _id
        this.name = name
        this.email = email
        this.mobile = mobile
        this.dob = dob
        this.adhar = adhar
    }
}

// Creating Object of User Class

let rahul=new User(11,"Rahul Kumar","rahul@bk.com","8865854410","14-08-1992","2555XXXXX64")
console.log(rahul)
