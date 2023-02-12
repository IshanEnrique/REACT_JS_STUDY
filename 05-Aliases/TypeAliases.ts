
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

export {}