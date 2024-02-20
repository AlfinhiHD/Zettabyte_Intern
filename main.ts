type stringNumArrtype = (string | number)[];
type stringNumtype = string | number;

// FUNGSI KE-1
function combineArray(arr: stringNumArrtype): string {
  return arr.join(' ');
}

console.log('\nOutput fungsi ke-1');
// Case 1
console.log(combineArray([1, 'data', '3', 'result'])); // Expect : ‘1 data 3 result’
// Case 2
console.log(combineArray(['Bejo', 'has', '4', 'sport', 'car'])); // Expect : ‘Bejo has 4 sport car’

// FUNGSI KE-2
function sumOrConcat(arrayInput: stringNumArrtype): stringNumtype {

  // if (typeof arrayInput[0] === 'undefined') {
  //   return 'invalid input';
  // }
  if (arrayInput.length <= 0) {
    return 'invalid input';
  }
  else if (arrayInput.every((item) => typeof item === 'number')) {
    return arrayInput.reduce((acc, curr) => +acc + +curr, 0);

    // let sum: number = 0;
    // arrayInput.forEach((el) => (sum += +el));
    // return sum;

    // let sum: number = 0;
    // for (let i = 0; i < arrayInput.length; i++) {
    //   sum += Number(arrayInput[i]);
    // }
    // return sum;
  } else if (arrayInput.every((item) => typeof item === 'string')) {
    return arrayInput.join(' ');
  } else {
    return 'invalid input';
  }
}

console.log('\nOutput fungsi ke-2');
// Case 1
console.log(sumOrConcat([1, 2, 3, 4])); // Output: 10
// Case 2
console.log(sumOrConcat(['the', 'dolphins', 'of', 'zettacamp'])); // Output: 'the dolphins of zettacamp'
// Case 3
console.log(sumOrConcat(['Bejo', 'has', 4, 'sport', 'car'])); // Output: 'invalid input'
// Case 4
console.log(sumOrConcat([])); // Output: 'invalid input'

// FUNGSI KE-3
type Product = {
  name: string;
  vendor: string;
  quantity: number;
  inStock: number;
  price: number;
};

type SimplifiedProduct = {
  name: string;
  buyable: boolean;
  totalPrice?: number;
};

function transformProduct(product: Product): {} {
  const simplifiedProduct: SimplifiedProduct = {
    name: product.name,
    buyable: product.inStock > 0,
  };

  if (simplifiedProduct.buyable) {
    simplifiedProduct.totalPrice = product.quantity * product.price;
  }

  return simplifiedProduct;
}

console.log('\nOutput fungsi ke-3');
// Case 1
const product1: Product = {
  name: 'Coca Cola',
  vendor: 'Coca Cola Company',
  quantity: 5,
  inStock: 100,
  price: 5000,
};
console.log(transformProduct(product1));

// Case 2
const product2: Product = {
  name: 'Sari Roti',
  vendor: 'Toko Kue Sebelah',
  quantity: 2,
  inStock: 0,
  price: 10000,
};
console.log(transformProduct(product2));
