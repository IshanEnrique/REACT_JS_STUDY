let user={
    name:"Rahul kumar",
    email:"rahul@bharatkadam.com",
    age:31,
    isLoggedIn:false
}

function getUser():{name:string,email:string,age:number,isLoggedIn:boolean}{
    return user
}

getUser()

// Here createUser function decleration tells it should strictly return an Object having attributes name and email of type strings but if we return more values directly as shown below then it will show an error but if you passes the return type as an variable then you can happly do .
function createUser():{name:string,email:string}{
    return {
        name:"Rahul kumar",
        email:"rahul@bharatkadam.com",
        age:31, // It shows error as return type decleration doesn't contains age and isLoggedIn
        isLoggedIn:false
    }
}

function createUser1():{name:string,email:string}{
    return user // It doesn't gives any error at this point
}





export {}