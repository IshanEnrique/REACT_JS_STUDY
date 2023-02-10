# Types commonly used 

> String

> Number

> Boolean

> Null

> Undefined

> Void

> Any

> Never

> Unknown


# Syntax - variable decleration


## let variableName: type=value

> let / const / var --------- variable decleration

> variableName ------------ Name of the variable

> : ----------- needs to be put after variable name

> type ---------- data type

> value ---------- optional value as the initialzation time

> Example ->  let greetings: string = "Hello Rahul Kumar"

> Some error line may be seen on greetings . But still works fine , to overcome this error add in the lase -- export {}


## Best practice -----------
> As TypeScript is smart enough to detect the type of the data being provided in variable initialization , so the best practice should be not always give the type of the data in the decleration part if TypeScript can detect its type autometically .

>// boolean decleration without specifying the type of the data 

1. let isLoggedIn = false;

