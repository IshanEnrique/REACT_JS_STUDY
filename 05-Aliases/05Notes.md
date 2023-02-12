# Type Alias -

- This is how you can structure you own data type which can be passed or used as typed parameter to a function or can be returned from a function as a value.

```sh

type User={
    name:string;
    email:string;
    age:number;
    isLoggedIn:boolean;
}

function createUser(user:User):User{

    return user;
}

createUser({name:"Rahul",email:"rahul@bharatkadam.com",age:31,isLoggedIn:false})

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