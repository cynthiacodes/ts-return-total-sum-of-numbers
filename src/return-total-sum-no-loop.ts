/**
 * 
 * @param inputArray - array of numbers and strings
 * @returns totalSum - the total of all numbers in inputArray
 */

function returnTotalSum (inputArray : (string | number )[]){

    const numbersArray   = inputArray.filter((element): element is number => typeof element === "number");

    const totalSum = numbersArray.reduce ((accumulator, currentNumber) => accumulator + currentNumber, 0);

    return totalSum;
}

export default returnTotalSum;