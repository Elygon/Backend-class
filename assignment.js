//Week1 assessment
//1
let number = 5;
let response;

if (number %2 == 0) {
    response = "It is an even number";
} else {
    response = "It is not an even number.";
}
console.log(response);

//2
let flower = "rose";
let tree = "apple";

console.log("flower:", tree);
console.log("tree:", flower);

//OR
let myFlower = "rose";
let myTree = "apple";

let swap = myFlower;
myFlower = myTree;
myTree = swap;

console.log(myFlower);
console.log(myTree);

//3
let input = "institute";
let output = input.length;
let reply;

if (output %2 == 0) {
    reply = "even";
} else {
    reply = "odd";
}
console.log(reply);


//Week 2 Assessment
//Activity1
let gender = "female";
let time = 11;
let answer;

if (gender == "male") {
    if (time > 16) {
        answer = "Good evening Sir";
    } else {
        answer = "Good day Sir";
    }
} else {
    if (time > 16) {
        answer = "Good evening Ma";
    } else {
        answer = "Good day Ma";
    }
}

console.log(gender)
console.log(answer)

//Activity 2
let day = 5;
let feedback;

if (day == 1) {
    feedback = "Today is Monday";
} else if (day == 2) {
    feedback = "Today is Tuesday";
} else if (day == 3) {
    feedback = "Today is Wednesday";
} else if (day == 4) {
    feedback = "Today is Thursday";
} else if (day == 5) {
    feedback = "Today is Friday";
} else if (day == 6) {
    feedback = "Today is Saturday";
} else if (day == 7) {
    feedback = "Today is Sunday";
} else {
    feedback = "invalid day";
}
console.log(feedback)
