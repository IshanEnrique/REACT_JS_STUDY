
// Class with Private and Public Data Member

// 1st way of Decleration

class UserWithPublicPrivate{
    public email:string
    public name:string
    private aadhar:string

    public showUserDetails(){
        console.log(`{Email : ${this.email} , Name : ${this.name} , Adhar : ${this.aadhar}}`)
    }

    constructor(email:string,name:string,aadhar:string){
        this.email=email
        this.name=name
        this.aadhar=aadhar
    }

}

let Rahul:UserWithPublicPrivate=new UserWithPublicPrivate("rahul@bharatkadam.com","Rahul Kumar","2555XXXXXX64")
Rahul.showUserDetails();


// 2nd way of decleration

class UserWithPublicPrivate2ndWay{
    private deleteUser(){
        // ToDo:
    }
    public showUserDetails(){
        console.log(`{Email : ${this.email} , Name : ${this.name} , Adhar : ${this.aadhar}}`)
    }
    constructor(
        public email:string,
        public name:string,
        public aadhar:string
    ){
        
    }
}

let Rahul1:UserWithPublicPrivate2ndWay=new UserWithPublicPrivate2ndWay("rahul@bharatkadam.com","Rahul Kumar","2555XXXXXX64")
Rahul1.showUserDetails();

// Trying to access private mrthod from outside the class is not correct

// Rahul1.deleteUser();

export {}