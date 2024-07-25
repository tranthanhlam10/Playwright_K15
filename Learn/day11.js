// TwoSumWithMap

const givenArr = [3,7,22,1];
const targetNumber = 8;
let indices = findIndicesUsingNestedLoop(givenArr, targetNumber);   

function findIndicesUsingNestedLoop(givenArr, targetNumber){
    for (let firstNumberIndex = 0; firstNumberIndex < givenArr.length; firstNumberIndex++ ){
        const firstNum = givenArr[firstNumberIndex];    
        for (let secondNumberIndex = 0 ;secondNumberIndex < givenArr.length ; secondNumberIndex++ ){
            const secondNum = givenArr[secondNumberIndex];
            if(secondNum === targetNumber - firstNum){
                return [firstNumberIndex, secondNumberIndex];   
            }
        }
    }
}


function findIndicesUsingMap(givenArr, targetNumber){
    let numMap = newMap();
    for (firstNumberIndex = 0; firstNumberIndex < givenArr.length; firstNumberIndex++){
        const firstNum = givenArr[firstNumberIndex];
        const lookingNum = targetNumber - firstNum;
        if(numMap.has(lookingNum)){
            return [firstNumberIndex, numMap.get(lookingNum) ];
        }
        numMap.set(firstNum, firstNumberIndex);
    }
}


// Groupwords

/**
 *  Given String: Hẹllo ban, tui ten Tao, ban cung ten tao luon ak
 * ---> output: 
 * Teo: 2
 * Ban: 2 ....
 */
