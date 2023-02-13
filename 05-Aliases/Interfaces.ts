interface MyUser{
    name:string;
    email:string;
}

function createUser(user:MyUser):UserCopy{
  let user1={name:user.name,email:user.email,age:31,isLoggedIn:false}
  return user1;
}

createUser({name:"Rahul",email:"rahul@bharatkadam"})

interface UserCopy extends MyUser{
    age:number,
    isLoggedIn:boolean
}
function createUser1(user:UserCopy):UserCopy{
    return {name:user.name,email:user.email,age:user.age,isLoggedIn:user.isLoggedIn}
}

createUser1({name:"Rahul",email:"rahul@bharatkadam.com",age:31,isLoggedIn:false})



// Declaring interfaces having function as well as attributes

interface MyUser1{
    readonly _id:number
    email:string
    name:string
    userId:number
    googleId?:string

    // Adding function signature 

    startTrial():number

    getCupon(cupon:string,off:number):number
}

// Create user of MyUser type

let rahul:MyUser1={_id:1111,email:"rahul@bharatkadam.com",name:"Rahul Kumar",userId:123123,getCupon(cupon:"DFDFD", off:20) {
    return off
},startTrial() {
    return 10
},}


export {}