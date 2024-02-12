function majorityElement(nums) {
    const check = {}; 
    for (let i = 0; i < nums.length; i++) {
      const value = nums[i]; 
      if (check[value]) {
        check[value] += 1; 
      } else {
        check[value] = 1; 
      }
    //   console.log(`Iterasi ${i + 1}:`, check); 
    }
  
    var major = 0; 
    for (const [key, _] of Object.entries(check)) {
      
      if (major == 0) {
        major = key; 
      }
      if (check[key] > check[major]) {
        major = key; 
      }
    //   console.log(`Kunci: ${key}, Jumlah Kemunculan: ${check[key]}, Nilai Mayoritas Sementara: ${major}`); 
    }
  
    return major; 
  }
  
  console.log(majorityElement([3, 2, 3])); // Output: 3 
  console.log(majorityElement([3, 2, 3, 2])); // Output: 3 
  console.log(majorityElement([3, 2, 3, 2, 3])); // Output: 3 
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
  console.log(majorityElement([2, 2, 1, 2, 1, 2, 2, 3, 3, 1])); // Output: 2
  
  