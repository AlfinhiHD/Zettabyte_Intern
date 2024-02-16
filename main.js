function getSubstring(inputString, startIndex, endIndex) {
    return inputString.substring(startIndex, endIndex);
}
var testString = "Learning Typescript is different than Javascript";
var startIndex = 9;
var endIndex = 19;
var result = getSubstring(testString, startIndex, endIndex);
console.log(result);
