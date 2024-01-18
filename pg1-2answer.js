//#1
/*function minMax(numbers){
    numbers.sort((a,b) => a-b);
    return [numbers[0], numbers[numbers.length- 1]];
    
}
let numbers= ([1,44,656,8686,9098,565,44,20,43]);
console.log(minMax(numbers)); */

//#2
/* function sortThis(numbers,k){
    numbers.sort((a,b) => a-b);
    return numbers.slice(0,k);

}
console.log(sortThis([2,5,4,3,6,7], 2)); */

//#3
/* function checkThis(numbers){
    for(let i=0; i < numbers.length-1; i++){
        if(numbers[i] > numbers[i+1]){
            return false;
        }
    }
    return true;
}
let numbers=([1,55,32]);
console.log(checkThis(numbers));*/

//#4

/* function absSort(numbers){
    numbers.sort((a,b) => Math.abs(a)- Math.abs(b));
    return numbers;
 }
 let numbers=([-2,-66,-23,4,797,1,-333]);
console.log(absSort(numbers));*/

//#5
/*  function quickselect(arr, left, right, k) {
    if (left === right) {
        return arr[left];
    }

    let pivotIndex = partition(arr, left, right);

    // length of the right partition
    let length = right - pivotIndex + 1;

    if (length === k) {
        return arr[pivotIndex];
    } else if (k < length) {
        return quickselect(arr, pivotIndex + 1, right, k);
    } else {
        return quickselect(arr, left, pivotIndex - 1, k - length);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] > pivot) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, i, right);
    return i;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function findKthLargest(numbers, k) {
    return quickselect(numbers, 0, numbers.length - 1, k);
}

console.log(findKthLargest([3, 5, 2, 4, 6, 8], 3)); */

//Counting/ Sorting

//#1

/*
function countThis(arr, numbers){
    let count=0;
    for(let i =0; i < arr.length; i++){
        if(numbers.includes(arr[i].length)){
            count++;
        }
    }
    return count;
 }
;
const arr = ["apple", "banana", "cherry", "date"];
const numbers = [3, 5, 6];
console.log(countThis(arr,numbers));*/

//#2

/*
  function littleString(arr,k){
    
    arr.sort();
    return arr.slice(0,k);
  }

const arr = ["apple", "banana", "cherry", "date"];
const k = 2;
const result = littleString(arr, k);
// console.log(result);*/

//#3

/*
function sortThis(arr){
    for(let i=0; i < arr.length-1; i++){
        if( arr[i] > arr[i+1]){
            return false;
        }
    }
            return true;
 }

 const arr1 = ["apple", "banana", "cherry", "date"];
const arr2 = ["apple", "banana", "date", "cherry"];

console.log(sortThis(arr1)); 
console.log(sortThis(arr2));*/

//#4

/*

 function sortK(numbers,k){
    let number= numbers.sort((a,b)=> a-b);
    let sliceEm= number.slice(0,k);
    return sliceEm;
    
 }
 let number= ([2,44,54,76,50,100,2,34,43]);
 console.log(sortK(number,3));  */

 //#5

 /*
function tgtString(arrays, tgt){
    let newArr= [];

    for(let arr of arrays){
        if(arr.includes(tgt)){
            newArr.push(arr);
        }
    }
    return newArr;
}
let arrays=["Did","this","work?"];
let tgt= "i";
console.log(tgtString(arrays,tgt));
 */