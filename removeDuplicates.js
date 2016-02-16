// Algorithm to filter out duplicate elements in an array

var myArray = ["Sam", "Mark", "Tim", "Sam"];

var result = myArray.filter(function (value, index, array) { return array.indexOf(value) === index; });

console.log(result);
