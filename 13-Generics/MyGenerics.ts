const score: Array<number>=[]
const item: Array<string>=[]

//  Without Generics

function identityOne(val:number | string) : number | string{
    return val;
}

function identityTwo(val:any):any{
    return val
}

// With the help of Generic
function identityThree<Type>(val:Type) : Type{
    return val;
}
identityThree(5)
identityThree("Hey")

// Generic in short way

function identityFour<T>(val:T) : T{
    return val;
}

// Generic in short way any Letter

function identityFive<H>(val:H) : H{
    return val;
}

// Custom Type can also passed

interface Bottle{
    brand: string,
    type: string
}

let bottle:Bottle={brand:"Rahul",type:"Gym"}

identityFive(bottle);