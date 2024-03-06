// How to Reverse a string using a reverse method.

var myname="hseedagaj"

var result = myname.split('').reverse().join("")

console.log(`Reversed string: ${result}`)


// How to Reverse a String not using reverse method

var dup =''
for(let i=myname.length-1;i>=0;i--)
{
    dup=dup+myname[i];
}

console.log("Reversing a string not using a reverse method " +dup)
