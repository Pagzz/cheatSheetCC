function rangeNumbers(start,end, step){
let range=[];

    for (let i=start; i<=end; i +=step){
        range.push(i);
    }
    return range;
}

console.log(rangeNumbers(0,100,20));