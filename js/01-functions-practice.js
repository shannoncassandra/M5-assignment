//STEP 1 Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. 
// It should log a string like "Half of 5 is 2.5.".

function halfNumber() {
    let pickNumber1 = prompt('Pick a number!')
    let divideTwo = (pickNumber1 / 2)
    console.log(`Half of ${pickNumber1} is ${divideTwo}!`)
}
halfNumber()

//STEP 2 Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber() {
    let pickNumber2 = prompt('Pick another number!')
    let itIsSquared = (pickNumber2 * pickNumber2)
    console.log(`The result of squaring ${pickNumber2} is ${itIsSquared}!`)
}
squareNumber() 

//STEP 3 Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the 
// second number, and return the result. It should log a string like "2 is 50% of 4."

function percentOf() {
    let pickNumber3 = prompt('Pick your first number!')
    let pickNumber4 = prompt('Pick your second number!')
    let thePercent = (((pickNumber3 / pickNumber4)) *100)
    console.log(`${pickNumber3} is ${thePercent}% of ${pickNumber4}!`)
}
percentOf() 

//STEP 4 Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus 
// of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus() {
    let pickNumber5 = prompt('Pick your first number!')
    let pickNumber6 = prompt('Pick your second number!')
    let theModulus = ((pickNumber5 % pickNumber6))
    console.log(`${theModulus} is the modulus of ${pickNumber5} and ${pickNumber6}!`)
}
findModulus()
