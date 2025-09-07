/*
//Variabel
let nama = "Rivaldi"; //bisa diubah
const umur = 25; //tidak bisa diubah
var kota = //cara lama

// Tipe Data
// String: "Halo"
// Nummber: 25
// Boolean: True / False
// Array: ["apel", "mangga", "pisang"]
// Object: {nama: "Andi", umur: 20}


// Operator
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a > b); // true

// Kondisi (if)
let nilai = 80;
if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

//Perulangan (looping)
for (let i = 1; i <= 5; i++) {
  console.log("Angka: " + i);
}

//Function
function sapa(nama) {
  return "Halo " + nama;
}
console.log(sapa("Rivaldi")); */

alert("JS berhasil berjalan");

// DOM - (Document Object Model)
let judul = document.getElementById("judul");
judul.textcontent = "Halo DOM";
judul.style.color = "white";

let desc = document.querySelector(".desc");
desc.style.fontWeight = "bold";

// Event
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  msg.textContent = "Successed!";
  msg.style.color = "green";
});

let namaInput = document.getElementById("nama");
let output = document.getElementById("output");

namaInput.addEventListener("input", function () {
  output.textContent = "Halo, " + namaInput.value;
});

/* Latihan Gabungan (JS Dasar + DOM + Event)
Buat tombol “Tambah Angka” → setiap diklik, angka di layar bertambah 1.
Buat form login sederhana → jika username/password kosong, tampilkan pesan error dengan warna merah.
Buat input teks → ketika user mengetik, hitung jumlah karakter yang sudah dimasukkan. */
