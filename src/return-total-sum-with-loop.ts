/**
 * 
 * @param inputArray - array of numbers and strings
 * @returns totalSum - the total of all numbers in inputArray
 */

function returnTotalSum (inputArray : (string | number )[]){
    let totalSum = 0;
    for(let element of inputArray){
        if (typeof element === "number"){
            totalSum += element;
        }
    }

    return totalSum;
}

export default returnTotalSum;