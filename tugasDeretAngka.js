function deret_angka(n) {
  // Tugas membuat program kelipatan for
  // Deklarasi var kosong (''); untuk diisi hasil
  var hasil = '';
  // Memulai perhitungan dan penentuan nilai i
  for (i = 1; i <= n; i++) {
    // Jika kelipatan 3 dan bukan kelipatan 5
    if (i % 3 === 0 && i % 5 !== 0) {
      // maka gantikan nilai dengan "NIO"
      hasil += 'NIO ';
    }
    // atau jika kelipatan 5 dan bukan kelipatan 3
    else if (i % 5 === 0 && i % 3 !== 0) {
      // maka gantikan nilai dengan "MIC"
      hasil += 'MIC ';
    }
    // atau jika nilai kelipatan 5 dan kelipatan 3
    else if (i % 5 === 0 && i % 3 === 0) {
      // maka gantikan nilai dengan "NIOMIC"
      hasil += 'NIOMIC ';
    }
    // Atau tetap hasilkan nilai tanpa diganti
    else {
      hasil += i + ' ';
    }
  }
  // hasilkan nilai
  return hasil;
}

console.log(deret_angka(10));
console.log(deret_angka(20));
console.log(deret_angka(30));