// 1. push(): Metode ini digunakan untuk menambahkan satu atau lebih elemen ke akhir dari sebuah array dan mengembalikan panjang array yang baru.

let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// 2. pop(): Metode ini digunakan untuk menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut.
let fruits2 = ['apple', 'banana', 'orange'];
let removedFruit = fruits2.pop();
console.log(fruits2); // Output: ['apple', 'banana']
console.log(removedFruit); // Output: 'orange'

// 3. shift(): Metode ini digunakan untuk menghapus elemen pertama dari sebuah array dan menggeser semua elemen yang tersisa ke indeks yang lebih rendah. Metode ini mengembalikan elemen yang dihapus.
let fruits3 = ['apple', 'banana', 'orange'];
let removedFruit2 = fruits3.shift();
console.log(fruits3); // Output: ['banana', 'orange']
console.log(removedFruit2); // Output: 'apple'

// 4. unshift(): Metode ini digunakan untuk menambahkan satu atau lebih elemen ke awal dari sebuah array dan menggeser elemen-elemen yang ada untuk membuat ruang bagi elemen-elemen baru. Metode ini mengembalikan panjang array yang baru.
let fruits4 = ['banana', 'orange'];
fruits4.unshift('apple');
console.log(fruits4); // Output: ['apple', 'banana', 'orange']

// 5. splice(): Metode ini digunakan untuk mengubah konten dari sebuah array dengan menghapus, mengganti, atau menambahkan elemen-elemen baru. Metode ini mengembalikan array yang berisi elemen-elemen yang dihapus.
let fruits5 = ['apple', 'banana', 'orange'];
fruits5.splice(1, 1, 'grape', 'mango');
console.log(fruits5); // Output: ['apple', 'grape', 'mango', 'orange']


// 6. concat(): Metode ini digunakan untuk menggabungkan dua atau lebih array, dan mengembalikan array baru yang berisi elemen-elemen dari array yang digabungkan.
let fruits6a = ['apple', 'banana'];
let fruits6b = ['orange', 'grape'];
let combinedFruits = fruits6a.concat(fruits6b);
console.log(combinedFruits); // Output: ['apple', 'banana', 'orange', 'grape']


// 7. indexOf(): Metode ini digunakan untuk mencari indeks pertama dari suatu elemen di dalam array. Jika elemen ditemukan, metode ini mengembalikan indeksnya; jika tidak, mengembalikan -1.
let fruits7 = ['apple', 'banana', 'orange'];
let index = fruits7.indexOf('banana');
console.log(index); // Output: 1

// 8. slice(): Metode ini digunakan untuk mengambil sebagian elemen-elemen dari sebuah array dengan membuat array baru. Metode ini mengembalikan array baru yang berisi elemen-elemen yang dipilih.
let fruits8 = ['apple', 'banana', 'orange', 'grape', 'mango'];
let slicedFruits = fruits8.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']

// 9. includes(): Metode ini digunakan untuk mengecek apakah sebuah array berisi suatu elemen. Metode ini mengembalikan nilai boolean, yaitu true jika elemen ditemukan, dan false jika tidak.
let fruits9 = ['apple', 'banana', 'orange'];
let includesBanana = fruits9.includes('banana');
console.log(includesBanana); // Output: true


// 10. toString(): Metode ini digunakan untuk mengubah array menjadi string dengan menggabungkan semua elemen dalam array ke dalam satu string. Elemen-elemen dipisahkan oleh koma
let fruits10 = ['apple', 'banana', 'orange'];
let fruitsString = fruits10.toString();
console.log(fruitsString); // Output: 'apple,banana,orange'
