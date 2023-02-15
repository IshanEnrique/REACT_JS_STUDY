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