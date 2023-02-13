
// Declaring Enums WITH DEFAULT VALUE INDEXING FROM 0 TO N-1 ELEMENT'S

enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW
}

// Declaring Enums WITH CUSTOM VALUE and rest of them follow from there

enum DomesticSeathoice{
    AISLE =10,
    MIDDLE,
    WINDOW
}

// Declaring Enums WITH CUSTOM String VALUE and rest of them follow from there

enum IndDomesticSeathoice{
    AISLE = "aisle",
    MIDDLE=2,
    WINDOW
}

// Compairing the enum value 

if(0===SeatChoice.AISLE){
    // TODO:
}
if(10===DomesticSeathoice.AISLE){
    // TODO:
}
if("aisle"===IndDomesticSeathoice.AISLE){
    // TODO:
}

export {}