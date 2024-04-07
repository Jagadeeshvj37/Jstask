function countDuplicates(arr) {
    // Create an empty object to store counts
    const counts = {};
    
    // Iterate through the array
    arr.forEach(item => {
      // If the item is not in the counts object, initialize its count to 1
      if (!counts[item]) {
        counts[item] = 1;
      } else {
        // If the item is already in the counts object, increment its count
        counts[item]++;
      }
    });
    // console.log("Duplicate count:"+counts[arr])
    // Create an array to store the duplicate values
    const duplicates = [];
    
    // Iterate through the counts object
    for (const key in counts) {
      // If the count for a value is greater than 1, it's a duplicate
      if (counts[key] > 1) {
        duplicates.push({ value: key, count: counts[key] });  // key , value
      }
    }
    return duplicates;
  }
  
  // Example usage
  const array = [3, 2, 3, 4, 5,0,-1, 1, 2, 3, 1, 4, 4,3];
  const duplicateCounts = countDuplicates(array);
  console.log(duplicateCounts);
  

  // Practice 

  // Duplicate Values with their count

  var arr=[1,2,5,2,3,2,3,3,1,4,4,7];

  var obj={};

  var kanaku=0;

  arr.forEach(summa=>{
    if(!obj[summa])
    {
      obj[summa]=1;
    }
    else{
      obj[summa]++;
    }
  })

  var summaarray=[];

  for(var saavi in obj)
  {
    if(obj[saavi]>0)
      summaarray.push({key : saavi, value : obj[saavi]})
  }

  console.log(summaarray);