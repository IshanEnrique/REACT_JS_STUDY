
// Tuples in Variable decleration of Array
// Below decleration we are saying that 3 sized array into the order of Number , String and then Boolean.
let user:[number, string, boolean];
user=[111,"Rahul",false]

// Try to change the order  - TypeScript will started showing error lines

user=["Rahul",false,111]


// Type Alias with Tuples 
type User=[number,string,number,boolean]

// Creating variable of type Type Alias , which assignment is mandotory in order of Number,String,Number and then Boolean
let newUser:User=[1,"Rahul",31,false]

// Applying push method to push the element into the Tuple array.

user.push("jjjj")