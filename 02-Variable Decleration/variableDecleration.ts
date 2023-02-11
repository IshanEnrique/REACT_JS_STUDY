
let greetings: string = "Hello Rahul kumar";
console.log(greetings);

// number decleration 

let userId: number = 193793;
console.log("userId as number : "+userId);

// boolean decleration without specifying the type of the data 

let isLoggedIn = false;
console.log("boolean value : "+isLoggedIn.valueOf());


// Best practice -----------
// As TypeScript is smart enough to detect the type of the data being provided in variable initialization , so the best practice should be not always give the type of the data in the decleration part if TypeScript can detect its type autometically . 
export {}