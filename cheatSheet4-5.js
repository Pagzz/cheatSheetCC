
//Objects
//#1

/*Create a JavaScript object named plant with two properties:
 id (a string) and productionSteps (an array of numbers). Then, write a 
 function to print the id of the plant.

let plant={
    id: "plant1",
    productionSteps: [1,2,3,4,5]
};

 function getId(plantObj){
   
    console.log(plantObj.id);
 }
getId(plant); */


//#2
/* Write a function that processes an array of plant objects,
 where each plant object contains a nested array of production steps. 
 The function should log each plant's ID along with its production steps.

 let plants = [
    { id: "Plant1", productionSteps: [1, 2, 3] },
    { id: "Plant2", productionSteps: [4, 5] }
];

 function processPlant(arrays){
    
    for(let arr of arrays){
        console.log(arr.id + " Steps:" + arr.productionSteps.join(', '));
    }
 }
processPlant(plants); */


//#3
/* Write a function that takes an array of objects, each object having a time
 property (a number). The function should return the total sum of all the time 
 values.

 let steps = [
    { step: "Cutting", time: 5 },
    { step: "Assembling", time: 8 },
    { step: "Painting", time: 4 }
];

function timeSum(productionSteps){
    let sum =0;
    for(let productionStep of productionSteps){
       sum+= productionStep.time;
    }
    return sum;
}
console.log(timeSum(steps));*/

//#4
/*Write a function that takes an array of steps (strings) in the order they
 need to be executed. The function should create and return an object where 
 each step is a key, and its value is its position in the process 
 (starting from 1). The order of steps in the object must match the order in
  the array.

  let steps = ["Cutting", "Assembling", "Painting"];

  function stepValue(keySteps){
    let orderedSteps ={};
    let index =1;
    for(let step of keySteps){
        orderedSteps[step]= index;
        index++;
    }
return orderedSteps;
  }
  console.log(stepValue(steps));*/

  //#5

  /*Given an array of plant objects where each plant has an id and 
  productionSteps (an array of objects with step and time properties), 
  write a function that returns a new object. In this new object, plant IDs 
  should be the keys, and the values should be objects where the keys are the 
  steps, and the values are the total time taken to reach that step, including 
  its own time.*/

  let plants = [
    { id: "Plant1", productionSteps: [{ step: "Cutting", time: 3 }, { step: "Assembling", time: 5 }] },
    { id: "Plant2", productionSteps: [{ step: "Molding", time: 4 }, { step: "Painting", time: 2 }] }
];

function sumTime(plants){
    let newObj={};
    for(let plant of plants){
        let sum=0;
        let stepsTime={};

        for(let step of plant.productionSteps){
           sum += step.time; 
           stepsTime[step.step]=sum;
        }
        newObj[plant.id] = stepsTime;
    }
    return newObj;
}
console.log(sumTime(plants));