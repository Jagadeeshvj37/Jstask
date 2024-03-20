const num=[30,10,50,20,70,40]
var count=1

const res=num.reduce(getMax)

console.log(res);
function getMax(accumulator,element)
{
   return Math.max(accumulator,element)
   
}
// console.log(res)