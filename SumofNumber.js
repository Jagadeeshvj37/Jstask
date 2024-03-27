var num=[2,24,8,94,95,7]

// using reduce method

var res=num.reduce((accumulator,element)=>{
    return accumulator+element;
})
console.log(`Using Reduce method: ${res}`)

//using for loop

// for in works
// for(let dup in num){
//     // console.log("Print the index id: "+dup) // give index 
//     // console.log("Print the value: "+num[dup]) // give value
// }

// for of works
// for(let ofdup of num)
// {
//     console.log(ofdup);  //give direct value 
    
// }

var sum=0;
for(var dupnum of num)
{
    sum=sum+dupnum
}
console.log("Using for of answer is "+sum)