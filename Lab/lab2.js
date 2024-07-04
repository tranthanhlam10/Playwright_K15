const readline = require('readline-syc')
let userInput = readline.question("Enter a number: ");
let input = Number(userInput);

// Lab 2.1
function calculateBMI (weight, height){
    const BMI = weight / (height* 2);
    if (BMI < 18.5){
        console.log("Underweight");
    } else if (BMI >= 18.5 && BMI < 24.9){
        console.log("Normal weight")
    } else if (BMI >= 25 && BMI < 29.9 ){
        console.log("Over weight")
    } else {
        console.log("Obesity")
    }
    console.log("BMI is: " + BMI )
    return BMI;
}
// Test 2.1 
// Case 1: weight = 70kg, height = 1.8m
calculateBMI(70, 1.8);
// Case 1: weight = 80kg, height = 1.6m
calculateBMI(80, 1.6);



// Lab 2.2
function checkOddOrEvenNumber(num) {
    if ((typeof(num) !== 'number') || (Number.isInteger(num) === false) || !num) {
        console.log("Input incorrect number");
    } else {
        const flag = num%2;
        if (flag === 0){
            console.log("Even number");
        } else {
            console.log("Odd number");
        }
    }
}

// Test 2.2
// Case 1: input incorrect number
checkOddOrEvenNumber("adffdfa");
// Case 2: input incorrect number
checkOddOrEvenNumber(10.5);
// Case 3: Even number
checkOddOrEvenNumber(10);
// Case 4: Odd number
checkOddOrEvenNumber(5);
// Input form keyboard
checkOddOrEvenNumber(input);

// Lab 2.3
function suggestHealth(BMI){
    const weight_enhance = 0; 
    if (BMI < 18.5 && BMI){
    
        console.log("Increase weight");
    } else if (BMI >= 25 && BMI){
        console.log("Decrease weight");
    } else {
        console.log("You're heathy");
    }
}

// Test 2.1 
// Case 1: weight = 70kg, height = 1.8m
const BMI_1 = calculateBMI(70, 1.8);
suggestHealth(BMI_1);
// Case 2: weight = 80kg, height = 1.6m
const BMI_2 = calculateBMI(80, 1.6);
suggestHealth(BMI_2);