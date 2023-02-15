# Narrowing -

- This section is about the best practice or can be said as best hacky code pieces .

- Using of typeof operator to be more sure on type of the values being accepted .
```sh

function detectType(val: string | number) {
    if (typeof val === "string")
        return val.toLowerCase()

    return val + 3
}

```
## Note - 

- typeof returns object for null , arrays or many others , so be cautiou while using typeof

- Always try to check for null also
```sh

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    id.toLowerCase();
}

```
- Returning object from typeof operator of array and null

```sh

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

```
- in operator to check key or value in object 

```sh

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

```

-  instanceof operator to get the return type of object created from new keyword

```sh

let date= new Date();

function logValue(str: Date | string){
    if(str instanceof Date){
        console.log(str.toUTCString())
    }else{
        console.log(str.toUpperCase())
    }

}

```
- as and is operator

```sh

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

```
- switch case 

```sh

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

```