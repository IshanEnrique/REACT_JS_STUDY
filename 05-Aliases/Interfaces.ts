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