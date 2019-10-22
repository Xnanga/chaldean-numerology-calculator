
// Chaldean Numerology Calculator ~~~ Created by Jamie Peutherer


// Gets name from user.

let userInputName = prompt("Please enter your first name.", "");

// Turns inputted name into an array.

let userInputNameArray = userInputName.split("");

// Finds and replaces all letters in the array with relevant numbers.

for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/a/ig, 1);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/b/ig, 2);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/c/ig, 3);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/d/ig, 4);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/e/ig, 5);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/f/ig, 8);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/g/ig, 3);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/h/ig, 5);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/i/ig, 1);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/j/ig, 1);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/k/ig, 2);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/l/ig, 3);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/m/ig, 4);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/n/ig, 5);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/o/ig, 7);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/p/ig, 8);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/q/ig, 1);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/r/ig, 2);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/s/ig, 3);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/t/ig, 4);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/u/ig, 6);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/v/ig, 6);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/w/ig, 6);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/x/ig, 5);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/y/ig, 1);
}
for(let i=0; i < userInputNameArray.length; i++) {
 userInputNameArray[i] = userInputNameArray[i].replace(/z/ig, 7);
}

// Calculations for turning array into string, then string into integer.

let addedUpTotalString = userInputNameArray.reduce((a, b) => a + b);
let addedUpTotalInt = parseInt(addedUpTotalString);

// Calculation to add all digits in integer together to get final value.

var finalTotal = addedUpTotalInt,
    sum = 0;

while (finalTotal) {
    sum += finalTotal % 10;
    finalTotal = Math.floor(finalTotal / 10);
	console.log(sum);
}

alert("Your name is " + userInputName + "?" + "\n \nIn Childean Numerology, your name converts to the following numbers: " + userInputNameArray + "\n \nThis means your name adds up to a total of " + sum);

document.location.reload();
