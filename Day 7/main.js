const bookDetails = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 75000,
  stock: 5,
};

const discountPercentage = 10;
const taxPercentage = 10;
// const purchasedAmount = 6;
// const purchasedAmount = 5;
const purchasedAmount = 4;

function bookPurchase(bookDetails, discountPercentage, taxPercentage, purchasedAmount) {
  const { title, author, price, stock } = bookDetails;

  let totalAmount = 0;

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
  console.log('----------------------------------------');
  console.log('PURCHASE DETAILS');
  console.log('Stock Amount:', stock);
  console.log('Purchased Amount:', purchasedAmount);
  console.log('----------------------------------------');

  for (let i = 0; i < purchasedAmount; i++) {
    if (i >= stock) {
      console.log('Out of Stock! Cannot purchase more books.');
      break;
    }

    totalAmount += priceAfterTax;
  }

  console.log('Total Amount for Purchased Books:', totalAmount.toFixed(2));

  if (purchasedAmount < stock) {
    console.log('----------------------------------------');
    console.log('You can purchase more books!');
  } else {
    console.log('----------------------------------------');
    console.log('The book is now out of stock.');
  }
}

bookPurchase(bookDetails, discountPercentage, taxPercentage, purchasedAmount);


//-----------------------------------------------------------------------------------
// LOGIC TEST
/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).
*/


function hasUniqueCharacters(str) {
  let charMap = {};
  // console.log(charMap)

  for (let char of str) {
    if (charMap[char]) {
      // console.log(charMap)
      return false;
    }

    charMap[char] = true;
  }

  return true;
}

console.log(("\n\n\n"));
// Example usage:
console.log(hasUniqueCharacters("abcdefg"));  // Output: true
console.log(hasUniqueCharacters("hello"));    // Output: false
