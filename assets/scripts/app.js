const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert(`The result is ${result}!`);
}

add(25, 10);
add('Bajs', 'korv');

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDesciption = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDesciption);

/* Testing out a function before the teacher has fully explained it
function greetUser(name, age) {
    alert(`Hi my name is ${name} and I am ${age} years old`);
}

greetUser('Nathi', 35); */
