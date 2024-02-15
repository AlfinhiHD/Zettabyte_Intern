function getSubstring(inputString: string, startIndex: number, endIndex: number): string {
    return inputString.substring(startIndex, endIndex);
}

// Test case 1
const testString: string = "Learning Typescript is different than Javascript";
const startIndex: number = 9;
const endIndex: number = 19;

const result: string = getSubstring(testString, startIndex, endIndex);
console.log(result); // Output should be "Typescript"