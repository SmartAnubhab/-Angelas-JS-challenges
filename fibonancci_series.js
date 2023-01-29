//fibonancci sequence:
/**
*it will return a fibonancci fibonancciSeries
*of number of items that you would give input
*inside parameter of the function.
*/
fibonancciSeries(15);

function fibonancciSeries(input){
    var arr=new Array(input);
    
    if(arr.length===1){
        arr=[0];
    }else if (arr.length===2) {
        arr=[0,1];
    }else  {
        var a=0, b=1,c = (a+b);
        arr[a]=a;
        arr[b]=b;
        for(let i=2; i<input; i++){
            arr[i]=c;
            a=b;
            b=c;
            c = (a+b);    
        }
    }
    return arr;
}

