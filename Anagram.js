const name1="listed";
const name2="silent";

const name1split=name1.split('').sort().join('');
const name2split=name2.split('').sort().join('');

console.log(name1split);
console.log(name2split);

if(name1split==name2split){
    console.log("Anagram");
}
else{
    console.log("Not an Anagram")
}