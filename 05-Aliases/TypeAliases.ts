
type User={
    readonly _id:string; // Once initialized , this read only can not be re-assigned and its for read only purposes
    name:string;
    email:string;
    age:number;
    isLoggedIn:boolean;
    cardDetails ?: string // ?: is used to define optional attribute , if you provide then good or else if don't provide then also not any problem
}

function createUser(user:User):User{

    return user;
}

// Declaring variable of type User -

let user: User = {_id: "0001", name:"Rahul",email:"rahul@bharatkadam.com",age:31,isLoggedIn:false}

//  Let try to modify the read only value _id . It does'nt allow us modify read only values

// user._id="1233333"

createUser(user)

export {}