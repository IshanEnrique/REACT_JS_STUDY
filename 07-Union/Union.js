"use strict";
// Union of two type in variable
exports.__esModule = true;
var score;
score = "200";
score = 200;
// Union of two custom types Type Alias
var rahul;
rahul = { name: "Rahul Kumar", id: 1992 };
rahul = { username: "IshanEnrique0850", id: 1992 };
// Union of two types in Array
// Below data decleration says that it can have the value either and String or array of Numbers . 
var data;
data = [1, 2, 3, 4];
data = "";
//  Below data1 decleration says that data1 can have either the Array of numbers Or can have Array of strings.
var data1;
data1 = [1, 2, 3, 4];
data1 = ["1", "2", "3", "4"];
// Below data2 decleration says that data2 can have an Array which can be numbers , strings or both .
var data2;
data2 = [1, 2, 3, 4];
data2 = ["1", "2", "3", "4"];
data2 = [1, "2", 3, "4"];
// Literal Assignment - To have only Fixed values and can be only allowed values to be modify
var seat;
seat = "asile";
seat = "middle";
