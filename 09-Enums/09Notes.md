# Enum-
> Enum is something about giving some available choices to the user in a more strict and safer way to use.


- Declaring Enums WITH DEFAULT VALUE INDEXING FROM 0 TO N-1 ELEMENT'S

```sh

enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW
}

```
- Declaring Enums WITH CUSTOM VALUE and rest of them follow from there

```sh

enum DomesticSeathoice{
    AISLE =10,
    MIDDLE,
    WINDOW
}

```

- Declaring Enums WITH CUSTOM String VALUE and rest of them follow from there

```sh

enum IndDomesticSeathoice{
    AISLE = "aisle",
    MIDDLE=2,
    WINDOW
}

```

- Compairing the enum value 

```sh

if(0===SeatChoice.AISLE){
    // TODO:
}
if(10===DomesticSeathoice.AISLE){
    // TODO:
}
if("aisle"===IndDomesticSeathoice.AISLE){
    // TODO:
}

```