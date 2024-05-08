let numbers = [1, 2, 3, 3, 4, 5, 5];

let uniqueNumbers = numbers.filter(function(value, index, array) {
  return array.indexOf(value) === index;
});

console.log(uniqueNumbers);