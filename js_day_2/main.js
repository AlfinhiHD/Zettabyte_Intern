let favoriteBook1 = "Dune";
let favoriteBook2 = "The Hitchhiker's Guide to the Galaxy";

let areBooksSame = favoriteBook1 === favoriteBook2;
console.log("Are the books the same?", areBooksSame);

let priceFavoriteBook1 = 250000; 
let priceFavoriteBook2 = 175000; 

let highestPriceBook = priceFavoriteBook1 > priceFavoriteBook2 ? favoriteBook1 : favoriteBook2;
console.log("The book with the highest price is:", highestPriceBook);

let averagePrice = (priceFavoriteBook1 + priceFavoriteBook2) / 2;
console.log("Average price of the books:", averagePrice);

// let averagePrice = 500000

let priceCategory = averagePrice <= 500000 ? "Cheap" : "Expensive";
console.log("Price category:", priceCategory);


// LOGIC TEST

function max_of_two(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "The numbers are equal";
  }
}

console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));
console.log(max_of_two(45, 45));