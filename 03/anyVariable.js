// any can be used when at the time of developing things you are not sure what type there would be this variable storing. We don't provide :type with the variable name to specify its type , will make it type of any.The recomendation is to avoid to use of any as TypeScript does the checking.
var noSureDataType;
function getNotSureData() {
    return "String type value";
}
noSureDataType = getNotSureData();
console.log("No sure type of value : " + noSureDataType);
// But we should avoid to use noImplicitAny  for example ->
var noImplicitAny;
function getNotSureData1() {
    return 10;
}
noImplicitAny = getNotSureData1();
console.log("Now its infering implicitly to return the data to the variable only number.");
