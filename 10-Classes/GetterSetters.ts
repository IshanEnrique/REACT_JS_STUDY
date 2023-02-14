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