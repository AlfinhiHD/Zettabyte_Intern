var majorityElement = function(nums) {
    var map = {};
    var max = 0;
    var majorNum = 0;

    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0; //inialisasi 0 jika blm ada
            
        }
        map[nums[i]]++; //tambah nilai
        
        // console.log("\n")
        // console.log(map);
        // console.log("\n")

        // jika kemunculan > max maka ganti majornum dan perbarui max
        if (map[nums[i]] > max) {
            // Simpan nilai yang baru ditemukan sebagai nilai mayoritas sementara
            majorNum = nums[i];
            // Simpan jumlah kemunculan nilai mayoritas sementara
            max = map[nums[i]];
        }
        // console.log(`Iterasi ke-${i + 1}: ${nums[i]}, Jumlah Kemunculan: ${map[nums[i]]}, Mayoritas Sementara: ${majorNum}, Nilai Max Saat Ini: ${max}`);
    }

    return majorNum;
};

console.log(majorityElement([2, 2, 1, 2, 1, 2, 2, 3, 3, 3, 3, 1, 1])); //2
console.log(majorityElement([2, 2, 1, 2, 1, 2, 0, 0, 3, 0, 0, 0, 0])); //0
