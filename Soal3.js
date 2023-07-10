const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }

    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }

    const hasilPencarian = dataArray.filter((nilai) => nilai > nilaiAwal && nilai < nilaiAkhir);

    if (hasilPencarian.length === 0) {
        return "Nilai tidak ditemukan";
    }

    hasilPencarian.sort((a, b) => a - b);

    return hasilPencarian;
}

// Contoh penggunaan
console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])); // Output: [8, 14, 17]
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])); // Output: "Nilai akhir harus lebih besar dari nilai awal"
console.log(SeleksiNilai(5, 17, [2, 25, 4])); // Output: "Jumlah angka dalam dataArray harus lebih dari 5"
console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); // Output: "Nilai tidak ditemukan"