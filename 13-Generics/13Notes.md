# Generics -

- Generics in TypeScript are a way to create reusable code that can work with multiple types, without specifying the type until it is used. Generics provide a way to write code that can be parameterized with different types, allowing for flexibility and type safety.

- In TypeScript, generics are indicated by placing a type parameter in angle brackets <> after the name of a function, class, or interface. For example, the following function takes a generic type parameter T, and returns an array of that type:

```sh
function makeArray<T>(arg: T): T[] {
  return [arg];
}


```

- This function can be called with any type, and TypeScript will infer the type based on the argument:

```sh
const arr1 = makeArray(1); // arr1 is of type number[]
const arr2 = makeArray("hello"); // arr2 is of type string[]

```

- Generics can also be used with interfaces and classes, allowing for reusable code that works with multiple types. For example, the following interface defines a generic type T, and has a method that returns a value of that type:

```sh
interface Box<T> {
  value: T;
  get(): T;
}


```

- This interface can be implemented with any type, providing a way to create a reusable container for values of any type:

typescript

```sh

class NumberBox implements Box<number> {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
  get(): number {
    return this.value;
  }
}

const numBox = new NumberBox(42);
console.log(numBox.get()); // outputs 42

```


- Generic in short way any Letter

```sh

function identityFive<H>(val:H) : H{
    return val;
}

```

- Custom Type can also passed

```sh

interface Bottle{
    brand: string,
    type: string
}

let bottle:Bottle={brand:"Rahul",type:"Gym"}

identityFive(bottle);

```


- Functions with Array

```sh

function getSearchProducts<T>(products: Array<T>):T{
    // do some operations
    let myIndex=3
    return products[myIndex]
}

```

- Arrow Function with Array

```sh

const getArrowSearchProducts=<T>(products:Array<T>):T=>{
     // do some operations
     let myIndex=3
     return products[myIndex]
}

```