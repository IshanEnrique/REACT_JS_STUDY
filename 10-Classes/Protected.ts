class Parent{
    constructor(
        public name:string,
        private SSN:number,
        protected email:string
    ){}
}


let rahul:Parent=new Parent("Nidhi",1234,"nidhi@rahul.com");

// Getting access to Public Data Member

console.log("Public DM - name : "+rahul.name)
// Getting access to Private Data Member but not allowed outside the class
console.log("Private DM - name : "+rahul.SSN)

// Getting access to Protected Data Member but not allowed outside the class
console.log("Private DM - name : "+rahul.email)

// Creating Child class

class Child extends Parent{
    public childData:string

    getParentProtectedDataMember(){
        return this.email
    }

    getChildData(){
        return this.childData
    }
}

let user:Child=new Child("Rahul Kumar",1992,"a@b.com")

console.log("Parent Protected Data from Child - Email : "+user.getParentProtectedDataMember())
console.log("Child Public Data - childData : "+user.getChildData())

export {}