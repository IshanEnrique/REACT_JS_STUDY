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