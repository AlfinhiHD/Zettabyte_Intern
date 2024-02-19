// Fungsi pertama: Menerima array dari tipe gabungan number dan string sebagai parameter dan mengembalikan string yang berisi kombinasi elemen-elemen dalam parameter tersebut.
function combineArray(arr: (number | string)[]): string {
    return arr.join(' ');
  }
  
  // Case 1
  console.log(combineArray([1, 'data', '3', 'result'])); // Output: '1 data 3 result'
  
  // Case 2
  console.log(combineArray(['Bejo', 'has', '4', 'sport', 'car'])); // Output: 'Bejo has 4 sport car'
  
//   // Fungsi kedua: Menerima parameter dari tipe gabungan. Menjumlahkan semua item jika inputnya adalah array dari angka atau menggabungkan item jika inputnya adalah array dari string. Fungsi ini harus mengembalikan hasil operasi tersebut.
//   function sumOrConcat(arr: (number | string)[]): number | string {
//     if (arr.every((item) => typeof item === 'number')) {
//       return arr.reduce((acc, curr) => acc + curr, 0);
//     } else if (arr.every((item) => typeof item === 'string')) {
//       return arr.join(' ');
//     } else {
//       return 'invalid input';
//     }
//   }
  
//   // Case 1
//   console.log(sumOrConcat([1, 2, 3, 4])); // Output: 10
  
//   // Case 2
//   console.log(sumOrConcat(['the', 'dolphins', 'of', 'zettacamp'])); // Output: 'the dolphins of zettacamp'
  
//   // Case 3
//   console.log(sumOrConcat(['Bejo', 'has', 4, 'sport', 'car'])); // Output: 'invalid input'
  
  // Fungsi ketiga: Mentransformasikan objek dari tipe produk kustom, Produk, menjadi tipe kustom yang disederhanakan, SimplifiedProduct. Properti produk terserah Anda tetapi pastikan produk yang disederhanakan memiliki setidaknya 1 properti opsional dalam definisinya. Transformasi harus mempertahankan properti tertentu dan, dalam kondisi tertentu, menyertakan properti opsional.
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
  
  function transformProduct(product: Product): SimplifiedProduct {
    const simplifiedProduct: SimplifiedProduct = {
      name: product.name,
      buyable: product.inStock > 0,
    };
  
    if (simplifiedProduct.buyable) {
      simplifiedProduct.totalPrice = product.quantity * product.price;
    }
  
    return simplifiedProduct;
  }
  
  // Case 1
  const product1: Product = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000,
  };
  console.log(transformProduct(product1));
  // Output: { name: 'Coca Cola', buyable: true, totalPrice: 25000 }
  
  // Case 2
  const product2: Product = {
    name: 'Sari Roti',
    vendor: 'Toko Kue Sebelah',
    quantity: 2,
    inStock: 0,
    price: 10000,
  };
  console.log(transformProduct(product2));
  // Output: { name: 'Sari Roti', buyable: false }