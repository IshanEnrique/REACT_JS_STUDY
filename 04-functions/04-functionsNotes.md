## Function decleration -

> Function without specifying type

```sh
function addTwo(num){
    return num+2;
}
console.log("Function without specifying type : "+addTwo(5))
- But the problem will start when some one consumer of this function passes value other than a number . Then this should be not the correct.


```
> To overcome this problem we can go the functions accepting the typed input.

```sh
function addTwoWithType(num:number){
    return num+2;
}
console.log("Function accepting with Typed parameter : "+addTwoWithType(5))

let signUpArrowFunction=(name:string , email:string , age: number , isPaid: boolean)=>{
// TODO:
}
console.log("Arrow function example with Typed accepting parameter  : "+signUpArrowFunction("Rahul","rahul@bharatkadam.com",31,false))

```

> Function with optional accepting parameter

```sh
let signUpArrowFunctionWithOptionalParam=(name:string,email:string,age:number,isPaid:boolean=false)=>{

}
console.log("Arrow function with typed input optional parameter : "+signUpArrowFunctionWithOptionalParam("Rahul","rahul@bharatkadam.com",31))

console.log("Arrow function with typed input optional complete parameter : "+signUpArrowFunctionWithOptionalParam("Rahul","rahul@bharatkadam.com",31,true))

```

## Function with Specific Return Type -

- Suppose we are working on some value or doing some calculations which is depending on some other function . So our working or calucation may gone wrong when the function return other type of value than expecting value type. 

- To overcome this problem in TypeScript we can also mention the return type of functions at the of writing one.

- Keep in mind that TypeScript is smart enough to detect the return type on the basis of returning value from the function , But best practice is to mention the function's return type will keep other user's to work on the same type and can be kept more reliable code.

> For example -> 

```sh


function  addTwo(num: number) : number{
    return num+2;
    //  This funciton should always return a number only

    // return "Value is "+num+2

    // This above line is not the correct return value because it should only return number
}

```
## Arrow Function with Specific Return Type -

```sh
const getTwoAddedVal=(num: number) : number =>{
    return num+2
}

```
## Functions that return never.

```sh

 function handleError(err: string) : never{
    throw new Error(err);
}

```

## Functions returning Object - 

```sh
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







```