// FUNGSI KE-1
function combineArray(arr) {
    return arr.join(' ');
}
console.log("\nOutput fungsi ke-1");
// Case 1
console.log(combineArray([1, 'data', '3', 'result'])); // Expect : ‘1 data 3 result’
// Case 2
console.log(combineArray(['Bejo', 'has', '4', 'sport', 'car'])); // Expect : ‘Bejo has 4 sport car’
// FUNGSI KE-2
function sumOrConcat(arr) {
    if (arr.every(function (item) { return typeof item === 'number'; })) {
        return arr.reduce(function (acc, curr) { return +acc + +curr; }, 0);
        // let sum: number = 0;
        // arr.forEach((el: number) => (sum += el));
        // return sum;
        // let sum: number = 0;
        // for (let i = 0; i < arr.length; i++) {
        //   sum += Number(arr[i]);
        // }
        // return sum;
    }
    else if (arr.every(function (item) { return typeof item === 'string'; })) {
        return arr.join(' ');
    }
    else {
        return 'invalid input';
    }
}
console.log("\nOutput fungsi ke-2");
// Case 1
console.log(sumOrConcat([1, 2, 3, 4])); // Output: 10
// Case 2
console.log(sumOrConcat(['the', 'dolphins', 'of', 'zettacamp'])); // Output: 'the dolphins of zettacamp'
// Case 3
console.log(sumOrConcat(['Bejo', 'has', 4, 'sport', 'car'])); // Output: 'invalid input'
function transformProduct(product) {
    var simplifiedProduct = {
        name: product.name,
        buyable: product.inStock > 0,
    };
    if (simplifiedProduct.buyable) {
        simplifiedProduct.totalPrice = product.quantity * product.price;
    }
    return simplifiedProduct;
}
console.log("\nOutput fungsi ke-3");
// Case 1
var product1 = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000,
};
console.log(transformProduct(product1));
// Case 2
var product2 = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000,
};
console.log(transformProduct(product2));
