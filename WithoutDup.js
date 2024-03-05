var a='12583212312'     // input

var dup=''      // to set value

var count=0

var len = a.length      // to find the length

for(let i=0; i<len; i++)
{
    var char = a[i]
    var trf = false;    // 
    if(trf){
    count=1
    
    }
    console.log(char+":"+count);
    for(let j=0; j<i; j++)
    {
        
        if(a[j] == char)
        {
            
            count=count+1;
            
            trf = true;
            
            
            break
        }
        
    }
    if(!trf)
    {
        dup=dup+char
        
    }
    
}
console.log("Output without duplicate value: "+dup+"-"+count)