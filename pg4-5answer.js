// Obj answers

//#1
/*let plant={
    id: "plant1",
    productionSteps: [1,2,3,4,5]
};

 function getId(plantObj){
   
    console.log(plantObj.id);
 }
getId(plant);*/

//#2

/*let plants = [
    { id: "Plant1", productionSteps: [1, 2, 3] },
    { id: "Plant2", productionSteps: [4, 5] }
];

 function processPlant(arrays){
    
    for(let arr of arrays){
        console.log(arr.id + " Steps:" + arr.productionSteps.join(', '));
    }
 }
processPlant(plants);*/


//#3
/* let steps = [
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
/* let steps = ["Cutting", "Assembling", "Painting"];

  function stepValue(keySteps){
    let orderedSteps ={};
    let index =1;
    for(let step of keySteps){
        orderedSteps[step]= index;
        index++;
    }
return orderedSteps;
  }
  console.log(stepValue(steps)); */

  /*  let plants = [
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
console.log(sumTime(plants));*/