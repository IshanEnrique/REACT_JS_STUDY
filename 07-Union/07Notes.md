# Union -

- Union is something to allow more than one type of data in a single variable have TypeScript some free hands




> Union of two type in variable
```sh

let score : string | number 

score="200"

score=200


type User={
    name: string
    id:number
}

type Admin={
    username:string
    id:number
}

```


> Union of two custom types Type Alias

```sh

let rahul : User | Admin;

rahul={name:"Rahul Kumar",id:1992}

rahul={username:"IshanEnrique0850",id:1992}

```

> Union of two types in Array

- Below data decleration says that it can have the value either and String or array of Numbers . 

```sh
let data : string | number []

data=[1,2,3,4]

data=""

```

>  Below data1 decleration says that data1 can have either the Array of numbers Or can have Array of strings.

```sh

let data1 : string[] | number[];

data1=[1,2,3,4]

data1=["1","2","3","4"]

```

> Below data2 decleration says that data2 can have an Array which can be numbers , strings or both .

```sh

let data2 : (string | number ) [];

data2=[1,2,3,4]

data2=["1","2","3","4"]

data2=[1,"2",3,"4"]

```

> Literal Assignment - To have only Fixed values and can be only allowed values to be modify

```sh

let seat : "asile" | "middle" | "window"

seat="asile"

seat="middle"

  seat="upper" // This gives error in TypeScript that seat value upper is not allowed.

export {}

```