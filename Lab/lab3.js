const readlineSync = require('readline-sync');

//input element from keyboard to Arr

function inputElementToArr() {
    let n = readlineSync.question('Input array length: ');
    
    if (isNaN(n) || n <= 0) {
        console.log('Please input positive numbers');
        return;
    }
    
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        let element = readlineSync.question(`Input element with index = ${i + 1}: `);
        arr.push(element);
    }
    
    return arr;
}

 let arrOddAndEvenNum = inputElementToArr();
console.log('Array: ', arrOddAndEvenNum);

// Lab 3.1

function countOddAndEvenNum(arr){
    let countEvenNum = 0;
    let countOddNum = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] % 2 == 0){
            countEvenNum++;
        } else {
            countOddNum++;
        }

    }
    console.log("Number of even is", countEvenNum)
    console.log("Number of odd is", countOddNum)
}

// const arr1 = [0,1, 2, 3, 41, -15, -1000, 222];
// countOddAndEvenNum(arr1);


// Lab 3.2
function findMinNum(arr){
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            arr[i] = arr[i+1];
        }
       
    }    
    return min;
}

function findMaxNum(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
            arr[i] = arr[i+1];
        }
       
    }    
    return max;
}

let arr1 = inputElementToArr();
console.log('Array: ', arr1);
findMaxNum(arr1);
findMinNum(arr1);

// const arr2 = [0,1,2,3];
// console.log("Min value is: " + findMinNum(arr2));
// console.log("Min value is: " + findMaxNum(arr2));        


// Lab 3.3

function sortFromMinToMax(arr){
    let flag = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
                if(arr[i] > arr[j]){
                    flag = arr[i];
                    arr[i] = arr[j];
                    arr[j] = flag;
                }
        }
    }
    return arr;
}

let arr2 = inputElementToArr();
console.log('Array: ', arr2);
sortFromMinToMax(arr2); 

// const arr3 = [10,5,1,3,0,4,-1,-2];
// console.log("Sorted array: " +sortFromMinToMax(arr3));



// Lab 3.4


// NOT - DONE - MAi lam tiep
function mergeSortedArr(arr1 ,arr2){;
    const mergedArr = arr1;
    for(let i = 0; i < arr2.length; i++){
        mergedArr.push(arr2[i]);
    }
    sortFromMinToMax(mergedArr)
    return mergedArr;
}


const arrA =  [1, 12, 16, 28, -34];
const arrB =  [1, 13, 16, 27, 11199];
console.log(arrA.push(3));
console.log(arrA);
console.log(mergeSortedArr(arrA, arrB));