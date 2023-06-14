const prompt = require('prompt-sync')({sigint: true});

// deklrasi variabel & inputan
let number = prompt("masukkan angka = ");

// jika bukan number && number >= 0 (tidak kurang dari 0 atau bilangan negatif)
if (!isNaN(number) && number >= 0) {
  // ika number di modulus 2 == 0
  if (number % 2 === 0) {
    console.log("Bilangan Genap dengan hasil akar kuadrat:") + console.log(Math.sqrt(number)); // bilangan genap
  } else {
    console.log("Tidak bisa input bilangan ganjil"); // bilangan ganjil
  }
} else { 
  console.log("Tidak bisa input bilangan negatif"); // bilangan kurang dari 0
}