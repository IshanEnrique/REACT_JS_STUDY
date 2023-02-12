function  addTwo(num: number) : number{
    return num+2;
    //  This funciton should always return a number only

    // return "Value is "+num+2

    // This above line is not the correct return value because it should only return number
}

//  Arrow Funciton with specified Return Type

const getTwoAddedVal=(num: number) : number =>{
    return num+2
}

// Functions that return never.

function handleError(err: string) : never{
    throw new Error(err);
}



export {}

