//Sorting functions 

//#1
/*Objective: Write a function that accepts an array of 
numbers and returns an array containing the minimum and 
maximum numbers. The result should be in the format [min, max].
*/


//#2

/* Objective: Write a function that takes an array of integers
and an integer k. The function should sort the array and 
return the first k elements of the sorted array. */

function sortThis(numbers,k){
    numbers.sort((a,b) => a-b);
    return numbers.slice(0,k);

}
console.log(sortThis([2,5,4,3,6,7], 2));

//#3
/*Objective: Write a function that checks whether an array 
of numbers is sorted in ascending order. Return true if it 
is sorted, otherwise false.*/


//#4
/*Objective: Write a function that sorts an array of integers 
based on the absolute values of the integers. The sorted array
 should be in ascending order of absolute values.
 */

//#5
/*Objective: Write a function that finds the kth largest
 element in an unsorted array. Do not sort the array; instead,
  find a way to get the kth largest element in linear time if 
  possible.*/

//Counting + sorting functions

//#1

/*Write a function countStringsByLength(arr, lengths) that 
takes an array of strings arr and an array of unique integers
 lengths. The function should return the number of strings in 
 the arr whose length is contained in the lengths array. 
 If the lengths array is empty, return 0. */


//#2

/* Question 2: Write a function that accepts two parameters, an array of
 strings, and an integer k. The function should return the k smallest strings
  from the array. If there are multiple strings with the same length, they 
  should be returned in lexicographically (alphabetical) ascending order. 
  If there are fewer than k strings in the array, return all of them.
*/


//3
/* Write a function that takes an array of strings as input and 
returns true if the strings in the array are sorted in lexicographically
 (alphabetical) ascending order. Otherwise, it should return false.
*/


//4

/*Write a function that takes an array of numbers and an integer k
 as parameters. The function should return an array containing the first 
 k numbers from the input array, sorted in ascending order.
*/


 //5
 /*  Write a function that takes an array of strings and a 
 target string as parameters. The function should return an array of 
 strings from the input array that contain the target string as a substring.
*/