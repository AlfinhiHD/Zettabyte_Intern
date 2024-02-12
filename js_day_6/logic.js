//LOGIC TEST

function majorityElement(nums) {
    let count = 0;
    let candidate = null;
  
    // Menggunakan algoritma Moore Voting
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
  
    // Verifikasi apakah candidate adalah elemen mayoritas
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
  
    // Jika count lebih dari setengah panjang nums, kembalikan candidate
    if (count > nums.length / 2) {
        return candidate;
    } else {
        return "No majority"; // Jika tidak ada elemen mayoritas
    }
  }
  
  console.log('\n')
  console.log('----------------------------------------');
  console.log("LOGIC TEST")
  console.log('----------------------------------------');
  console.log(majorityElement([3, 2, 3])); // Output: 3 
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
  