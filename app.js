function uniqueSet(arr) {
    return [...new Set(arr.map(val => val.id))].map((id) => arr.find(value => value.id === id))
}

const arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];


uniqueSet(arr)