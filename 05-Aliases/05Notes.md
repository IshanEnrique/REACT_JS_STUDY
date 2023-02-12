# Type Alias -

- This is how you can structure you own data type which can be passed or used as typed parameter to a function or can be returned from a function as a value.

```sh


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

```

# Interface -

- Interface is also used in same way as type alias is using . Any one can be use in some of cases.

- The Key difference between interface and type alias is interfaces is open to extend property later but in type alias in its close to extend more properties. 

```sh

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

export {}

```