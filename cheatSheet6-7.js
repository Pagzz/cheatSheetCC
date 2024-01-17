// Ranges

//#1
/*Problem: Write a function that takes a string and a range 
(an array of two numbers indicating start and end positions) 
and returns the substring within that range.

 function subRange(strings,range){
   return strings.substring(range[0], range[1]);
 }
 let string= 'This could be it';
 let range=[1,6];
 console.log(subRange(string,range));*/ 

//#2
 /*Problem: Write a function that takes a string, a range, and
  a single operation (a function that takes a string and
     returns a modified string). Apply this operation only to 
     the substring within the given range, and return the 
     modified string.*/


     function modifyThis(strings, range,operation){
        let subString= (strings.substring(range[0], range[1]+1));

        let modifiedString= operation(subStrings);

        return 

     }
let strings="I dont really understand what the question is asking";
let range=[0,20];
let operation= fucnction(text)

//#3
/*Problem: Write a function that takes a string and an array 
of operations. Apply these operations in sequence 
(the output of one operation is the input to the next) to the 
entire string and return the modified string. */

//#4
/* Problem: Modify the function from Problem 2 to handle an
 array of ranges instead of a single range. Apply the 
 operation to each range independently and return the modified
string. */

//#5

/*Problem: Combine the logic from Problems 3 and 4. 
Write a function that takes a string, an array of operations, 
and an array of ranges. Apply each operation to only the text 
within the specified ranges, and return the modified text. */