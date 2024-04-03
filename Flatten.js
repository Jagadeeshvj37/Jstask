// Array of Array

var arr = [[1,2], [5,6], [3,4]]

const flutten = 
arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue)) 

console.log(flutten)