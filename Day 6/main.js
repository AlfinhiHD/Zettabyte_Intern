function bookPurchase(bookDetails, discountPercentage, taxPercentage) {
  const { title, author, price } = bookDetails;

  const discountAmount = price * (discountPercentage / 100);
  const priceAfterDiscount = price - discountAmount;

  const taxAmount = priceAfterDiscount * (taxPercentage / 100);
  const priceAfterTax = priceAfterDiscount + taxAmount;

  console.log('========================================');
  console.log('            BOOK RECEIPT');
  console.log('========================================');
  console.log('Title  :', title);
  console.log('Author :', author);
  console.log('Price  :', price.toFixed(2));
  console.log('----------------------------------------');
  console.log('DISCOUNT');
  console.log('Discount Percentage  :', discountPercentage, '%');
  console.log('Discount Amount      :', discountAmount.toFixed(2));
  console.log('Price After Discount :', priceAfterDiscount.toFixed(2));
  console.log('----------------------------------------');
  console.log('TAX');
  console.log('Tax Percentage  :', taxPercentage, '%');
  console.log('Tax Amount      :', taxAmount.toFixed(2));
  console.log('Price After Tax :', priceAfterTax.toFixed(2));
  console.log('========================================');
}

const discountPercentage = 10;
const taxPercentage = 8;

const bookDetails = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 75000,
};

//   const bookDetails = {
//     title: "The Great Bigbang",
//     author: "Allan Jameson",
//     price: 99.99,
//   };

bookPurchase(bookDetails, discountPercentage, taxPercentage);

//LOGIC TEST
function isPrime(n) {

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(10)); 
console.log(isPrime(43)); 
console.log(isPrime(7))
console.log(isPrime(42))
console.log(isPrime(47))


// let n = 43;
// let akarKuadrat = Math.sqrt(n);
// console.log(akarKuadrat)