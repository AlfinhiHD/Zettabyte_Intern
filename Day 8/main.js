const bookDetails = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 75000,
    stock: 5,
  };
  
  const discountPercentage = 10;
  const taxPercentage = 10;
  const purchasedAmount = 4;
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
  
    console.log('----------------------------------------');
    console.log('DUE DATES AND PAYMENT PER MONTH');
    const monthlyPayment = totalAmount / creditTerm;
  
    const dueDates = Array.from({ length: creditTerm }, (_, index) => {
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + index + 1);
      return {
        dueDate: nextMonth.toDateString(),
        paymentAmount: monthlyPayment.toFixed(2),
      };
    });
  
    dueDates.forEach(({ dueDate, paymentAmount }) => {
      console.log(`${dueDate} - Payment: ${paymentAmount}`);
    });
  }
  
  bookPurchase(bookDetails, discountPercentage, taxPercentage, purchasedAmount, creditTerm);



//LOGIC TEST

function containsDuplicate(nums) {
    const uniqueSet = new Set();
  
    for (const num of nums) {
      if (uniqueSet.has(num)) {
        return true;
      }
      uniqueSet.add(num);
    }

    return false;
  }
  
  // Example usage:
  console.log("\n\n\n\n")
  console.log(containsDuplicate([1, 2, 3, 1])); 
  console.log(containsDuplicate([1, 2, 3, 4])); 
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 