const bookDetails = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 75000,
    stock: 3,
  },
  {
    title: 'The Great Dinosaurs',
    author: 'F. Scott Fitzgerald',
    price: 55000,
    stock: 5,
  },
];

const discountPercentage = 10;
const taxPercentage = 10;
const purchasedAmount = 6;
const creditTerm = 6;

function bookPurchase(bookDetails, discountPercentage, taxPercentage, purchasedAmount, creditTerm) {
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
  console.log('Discount Amount      :', discountAmount);
  console.log('Price After Discount :', priceAfterDiscount);
  console.log('----------------------------------------');
  console.log('TAX');
  console.log('Tax Percentage  :', taxPercentage, '%');
  console.log('Tax Amount      :', taxAmount);
  console.log('Price After Tax :', priceAfterTax);
  console.log('----------------------------------------');
  console.log('PURCHASE DETAILS');
  console.log('Stock Amount:', stock);
  console.log('Purchased Amount:', purchasedAmount);
  console.log('----------------------------------------');

  if (purchasedAmount > stock) {
    purchasedAmount = stock;
    console.log('You can only buy ' + stock + ' books!');
  }

  totalAmount = purchasedAmount * priceAfterTax;

  console.log('Total Amount for Purchased Books:', totalAmount);
  console.log('----------------------------------------');
  console.log('DUE DATES AND PAYMENT PER MONTH');

  const monthlyPayment = totalAmount / creditTerm;

  console.log(creditTerm);
  const dueDates = Array.from({ length: creditTerm }, (_, inDueDate) => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + inDueDate + 1);
    return {
      month: inDueDate + 1,
      dueDate: nextMonth.toDateString(),
      paymentAmount: monthlyPayment,
    };
  });

  console.log(dueDates);
  console.log('----------------------------------------');

  let totalPayment = 0;

  dueDates.forEach((dueDate) => {
    totalPayment += dueDate.paymentAmount;
  });

  console.log('Total Payment Amount:', totalPayment);
}

bookPurchase(bookDetails[1], discountPercentage, taxPercentage, purchasedAmount, creditTerm);
