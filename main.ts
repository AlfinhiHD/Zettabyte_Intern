type SubstringParams = {
    testString: string;
    startIndex: number;
    endIndex: number;
}

function getSubstring(substringParams: SubstringParams): string {
    return substringParams.testString.substring(substringParams.startIndex, substringParams.endIndex);
}

const result: string = getSubstring({
    testString: "Learning Typescript is different than Javascript",
    startIndex: 9,
    endIndex: 19
});

console.log(result);