'use strict';

console.log("I am in the HTML");
alert("Welcome to my page!!!");
// const theirName = getName();
// greetuser();


function getName() {
const usersName = prompt("Please select one of the 5 names(Alice, Bob, Charlie, Barbie or Stranger)");
return usersName;
}
// console.log(theirName);

function greetuser() {

document.write("Hiya " +  theirName + " - Welcome to my page!!!") 
}

function specialMessage(usersName){
if (usersName == ""){
    usersName = prompt("Come on, please tell me your name");
}
if (usersName == "Alice") {
    let result = confirm("Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");

} else if (usersName =="Bob") {
    let result = confirm("Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Charlie") {
    let result = confirm("Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Barbie") {  
    let result = confirm("Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Stranger") {
    let result = confirm("Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
}
}




function addTwoNumbers (num1, num2) {
    let sum = num1 + num2;
    console.log("Sum is:", sum);
    return sum;
}

