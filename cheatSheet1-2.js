//Sorting functions 

//#1
/*Objective: Write a function that accepts an array of 
numbers and returns an array containing the minimum and 
maximum numbers. The result should be in the format [min, max].

function minMax(numbers){
    numbers.sort((a,b) => a-b);
    return [numbers[0], numbers[numbers.length- 1]];
    
}
let numbers= ([1,44,656,8686,9098,565,44,20,43]);
console.log(minMax(numbers)); */

//#2

/* Objective: Write a function that takes an array of integers
and an integer k. The function should sort the array and 
return the first k elements of the sorted array. 

function sortThis(numbers,k){
    numbers.sort((a,b) => a-b);
    return numbers.slice(0,k);

}
console.log(sortThis([2,5,4,3,6,7], 2));*/

//#3
/*Objective: Write a function that checks whether an array 
of numbers is sorted in ascending order. Return true if it 
is sorted, otherwise false.

function checkThis(numbers){
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
/*Objective: Write a function that sorts an array of integers 
based on the absolute values of the integers. The sorted array
 should be in ascending order of absolute values.

 function absSort(numbers){
    numbers.sort((a,b) => Math.abs(a)- Math.abs(b));
    return numbers;
 }
 let numbers=([-2,-66,-23,4,797,1,-333]);
console.log(absSort(numbers)); */

//#5
/*Objective: Write a function that finds the kth largest
 element in an unsorted array. Do not sort the array; instead,
  find a way to get the kth largest element in linear time if 
  possible.
  function quickselect(arr, left, right, k) {
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


//Counting + sorting functions

//#1

/*Write a function countStringsByLength(arr, lengths) that 
takes an array of strings arr and an array of unique integers
 lengths. The function should return the number of strings in 
 the arr whose length is contained in the lengths array. 
 If the lengths array is empty, return 0.

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
console.log(countThis(arr,numbers)); */


//#2

/* Question 2: Write a function that accepts two parameters, an array of
 strings, and an integer k. The function should return the k smallest strings
  from the array. If there are multiple strings with the same length, they 
  should be returned in lexicographically (alphabetical) ascending order. 
  If there are fewer than k strings in the array, return all of them.

  function littleString(arr,k){
    
    arr.sort();
    return arr.slice(0,k);
  }

const arr = ["apple", "banana", "cherry", "date"];
const k = 2;
const result = littleString(arr, k);
// console.log(result);*/


//3
/* Write a function that takes an array of strings as input and 
returns true if the strings in the array are sorted in lexicographically
 (alphabetical) ascending order. Otherwise, it should return false.

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


//4

/*Write a function that takes an array of numbers and an integer k
 as parameters. The function should return an array containing the first 
 k numbers from the input array, sorted in ascending order.

 function sortK(numbers,k){
    let number= numbers.sort((a,b)=> a-b);
    let sliceEm= number.slice(0,k);
    return sliceEm;
    
 }
 let number= ([2,44,54,76,50,100,2,34,43]);
 console.log(sortK(number,3)); */


 //5
 /*  Write a function that takes an array of strings and a 
 target string as parameters. The function should return an array of 
 strings from the input array that contain the target string as a substring.

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