const nama = [
  "Andi", "Ali", "Abdi",
  "Angga", "Budi", "Bella",
  "Ciko", "Catrin", "Celi",
  "Dani", "Diana", "Erick",
  "Ella", "Fandi", "Ongki", "Sindi"
];

const searchName = (keyword, limit, callback) => {
  const filteredNames = nama.filter((checkName) => checkName.toLowerCase().includes(keyword.toLowerCase()));
  const slicedNames = filteredNames.slice(0, limit);
  callback(slicedNames);
}

const callback = names => {
  console.log(names);
}

// Contoh penggunaan
searchName("an", 3, callback);
