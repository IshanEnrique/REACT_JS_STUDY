## Function decleration -

> Function without specifying type

function addTwo(num){
    return num+2;
}
console.log("Function without specifying type : "+addTwo(5))
- But the problem will start when some one consumer of this function passes value other than a number . Then this should be not the correct.

> To overcome this problem we can go the functions accepting the typed input.

function addTwoWithType(num:number){
    return num+2;
}
console.log("Function accepting with Typed parameter : "+addTwoWithType(5))

let signUpArrowFunction=(name:string , email:string , age: number , isPaid: boolean)=>{
// TODO:
}
console.log("Arrow function example with Typed accepting parameter  : "+signUpArrowFunction("Rahul","rahul@bharatkadam.com",31,false))

> Function with optional accepting parameter

let signUpArrowFunctionWithOptionalParam=(name:string,email:string,age:number,isPaid:boolean=false)=>{

}
console.log("Arrow function with typed input optional parameter : "+signUpArrowFunctionWithOptionalParam("Rahul","rahul@bharatkadam.com",31))

console.log("Arrow function with typed input optional complete parameter : "+signUpArrowFunctionWithOptionalParam("Rahul","rahul@bharatkadam.com",31,true))
