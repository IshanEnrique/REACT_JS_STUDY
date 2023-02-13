"use strict";
// Declaring Enums WITH DEFAULT VALUE INDEXING FROM 0 TO N-1 ELEMENT'S
exports.__esModule = true;
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// Declaring Enums WITH CUSTOM VALUE and rest of them follow from there
var DomesticSeathoice;
(function (DomesticSeathoice) {
    DomesticSeathoice[DomesticSeathoice["AISLE"] = 10] = "AISLE";
    DomesticSeathoice[DomesticSeathoice["MIDDLE"] = 11] = "MIDDLE";
    DomesticSeathoice[DomesticSeathoice["WINDOW"] = 12] = "WINDOW";
})(DomesticSeathoice || (DomesticSeathoice = {}));
// Declaring Enums WITH CUSTOM String VALUE and rest of them follow from there
var IndDomesticSeathoice;
(function (IndDomesticSeathoice) {
    IndDomesticSeathoice["AISLE"] = "aisle";
    IndDomesticSeathoice[IndDomesticSeathoice["MIDDLE"] = 2] = "MIDDLE";
    IndDomesticSeathoice[IndDomesticSeathoice["WINDOW"] = 3] = "WINDOW";
})(IndDomesticSeathoice || (IndDomesticSeathoice = {}));
// Compairing the enum value 
if (0 === SeatChoice.AISLE) {
    // TODO:
}
if (10 === DomesticSeathoice.AISLE) {
    // TODO:
}
if ("aisle" === IndDomesticSeathoice.AISLE) {
    // TODO:
}
