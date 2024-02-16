function getSubstring(substringParams) {
    return substringParams.testString.substring(substringParams.startIndex, substringParams.endIndex);
}
var result = getSubstring({
    testString: "Learning Typescript is different than Javascript",
    startIndex: 9,
    endIndex: 19
});
console.log(result);
