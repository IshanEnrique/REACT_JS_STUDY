# Abstract Class

- Abstract class can not be use to make object / instance . 

- Abstract class can have abstract and non-abstract both method

- Abstract class can be inherited by child classes with the help of extends keyword


```sh

abstract class TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    // We have to declare the method as abstract or else we have to provide the defination of the method.
    
   abstract getSepia(): void

//    Non-Abstract method in abstract class with method defination
   getReelTime():number{
    return 8;
   }
}

// We can not create object of abstract class

// let rahul=new TakePhoto("Test","Test")

class Instagram extends TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }
    // We need to provide implementation of abstract method declared in Parent asbstract class.
    getSepia(): void {
        
    }
}

let user=new Instagram("Test","Test",8)

```