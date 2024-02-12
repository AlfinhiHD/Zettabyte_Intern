function majorityElement(nums) {
    const check = {}; // Membuat objek untuk menyimpan jumlah kemunculan setiap nilai
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i]; // Mengambil nilai pada indeks ke-i
      if (check[value]) {
        // Memeriksa apakah nilai sudah ada dalam objek check
        check[value] += 1; // Menambah jumlah kemunculan nilai
      } else {
        check[value] = 1; // Menginisialisasi jumlah kemunculan nilai
      }
      console.log(`Iterasi ${i + 1}:`, check); // Menampilkan objek check setiap iterasi
    }
  
    var major = 0; // Variabel untuk menyimpan nilai mayoritas
    for (const [key, _] of Object.entries(check)) {
      // Iterasi melalui setiap entri dalam objek check
      if (major == 0) {
        major = key; // Inisialisasi nilai mayoritas dengan nilai pertama dalam objek check
      }
      if (check[key] > check[major]) {
        major = key; // Memperbarui nilai mayoritas jika jumlah kemunculan nilai baru lebih besar
      }
      console.log(`Kunci: ${key}, Jumlah Kemunculan: ${check[key]}, Nilai Mayoritas Sementara: ${major}`); // Menampilkan proses iterasi
    }
  
    console.log('Nilai Mayoritas Akhir:', major); // Menampilkan nilai mayoritas akhir
  
    return major; // Mengembalikan nilai mayoritas
  }
  
  console.log(majorityElement([3, 2, 3])); // Output: 3 
  console.log(majorityElement([3, 2, 3, 2])); // Output: 3 
  console.log(majorityElement([3, 2, 3, 2, 3])); // Output: 3 
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
  console.log(majorityElement([2, 2, 1, 2, 1, 2, 2, 3, 3, 1])); // Output: 2
  
  