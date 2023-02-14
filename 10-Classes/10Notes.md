# Class -

> Declaring class 

```sh


class User {
   readonly _id: number
    name: string
    email: string
    mobile: string
    dob: string
    adhar?: string

    constructor(_id: number, name: string, email: string, mobile: string, dob: string, adhar?: string    ) {

        this._id = _id
        this.name = name
        this.email = email
        this.mobile = mobile
        this.dob = dob
        this.adhar = adhar
    }
}

// Creating Object of User Class

let rahul=new User(11,"Rahul Kumar","rahul@bk.com","8865854410","14-08-1992","2555XXXXX64")
console.log(rahul)


```



## Class with Private and Public Data Member

> 1st way of Decleration

```sh

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

export {}

```


> 2nd way of decleration

```sh

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

export {}

```

> Trying to access private mrthod from outside the class is not correct

```sh

Rahul1.deleteUser();

```

## Getters and Setters



```sh

class GetterSetter{
    constructor(
        private email:string,
        private name:string,
        private aadhar:string
    ){}

    get getEmial():string{return this.email}
    set setEemail(email:string){this.email=email}

    // We can not declare return of a setter

    set setName(name:string):string{this.name=name}


}

export {}

```

## Protected - Data Member

```sh

class Parent{
    constructor(
        public name:string,
        private SSN:number,
        protected email:string
    ){}
}


let rahul:Parent=new Parent("Nidhi",1234,"nidhi@rahul.com");

```

- Getting access to Public Data Member

```sh

console.log("Public DM - name : "+rahul.name)

```
- Getting access to Private Data Member but not allowed outside the class

```sh

console.log("Private DM - name : "+rahul.SSN)

```

- Getting access to Protected Data Member but not allowed outside the class

```sh

console.log("Private DM - name : "+rahul.email)

```

- Creating Child class

```sh

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

```