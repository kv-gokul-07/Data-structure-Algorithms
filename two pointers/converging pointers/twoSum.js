let arrVal = [20, 30, 10, 40, 50]

//<-------- Using BruthForce Method --------->

// function twoSum(arrVal, target) { 
//     for(let i = 0; i < arrVal.length; i++) {
//         for(let j = i + 1; j < arrVal.length; j++) {
//             if(arrVal[i] + arrVal[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

//<------ Using two pointer -------->


console.log(twoSum(arrVal, 30))