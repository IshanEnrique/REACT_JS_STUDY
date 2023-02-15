function detectType(val: string | number) {
    if (typeof val === "string")
        return val.toLowerCase()

    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    id.toLowerCase();
}

function printAll(val : string | string[] | null){
    if(val){
        if(typeof val ==="object"){
            for(let value of val ){
                console.log(value)
            }
        }else if(typeof val ==="string"){
            console.log(val)
        }
    }
}

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function checkAdminAccount(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}

let date= new Date();

function logValue(str: Date | string){
    if(str instanceof Date){
        console.log(str.toUTCString())
    }else{
        console.log(str.toUpperCase())
    }

}

type Fish={swim:()=> void}
type Bird={fly:()=> void}

function isFish(pet: Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet : Fish | Bird): string{

    if(isFish(pet)){
        pet
        return "Fish Food"
    }else{
        pet 
        return "Bird Food"
    }
}


interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

type Shape= Circle | Square

function getTrueShape(shape : Circle | Square){
    if(shape.kind==="circle")
        return Math.PI * shape.radius **2
    
    return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return  Math.PI * shape.radius **2;
        case "square":
            return shape.side * shape.side

        
        default : 
            const _neverShape: never=shape

            return _neverShape
        
    
    }

}