'use strict';

console.log("I am in the HTML");
alert("Welcome to my page!!!");
// const theirName = getName();
// greetuser();




function getName() {
let acceptedNames = ['Alice','Bob','Charlie','Barbie','Stranger'];
let usersName = '';
while(!acceptedNames.includes(usersName)){
    const usersName = prompt("Please select one of the 5 names(Alice, Bob, Charlie, Barbie or Stranger)");
if (!acceptedNames.includes(usersName)) {
    alert("That name is not accepted. Please try again..");
}
if(acceptedNames.includes(usersName))
return usersName;
}
}


// console.log(theirName);

function greetuser() {

document.write("Hiya " +  theirName + " - Welcome to my page!!!") 
}

function specialMessage(usersName){
while (usersName == ""){
    usersName = prompt("Come on, please tell me your name");
}
if (usersName == "Alice") {
    let result = confirm("Thanks, Welcome to my page - Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");

} else if (usersName =="Bob") {
    let result = confirm("Thanks, Welcome to my page - Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Charlie") {
    let result = confirm("Thanks, Welcome to my page - Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Barbie") {  
    let result = confirm("Thanks, Welcome to my page - Do you want to proceed");
    if (result) {
        alert("You clicked Ok!")
    }
    document.write (" Happy to have you here");
} else if (usersName =="Stranger") {
    let result = confirm("Thanks, Welcome to my page - Do you want to proceed");
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

function rateMyPage(){

    let rating = prompt("How would you rate my page ? 1-5 ");

    console.log(rating)

    for (let i=0; i < rating; i++) {
        document.write("<img class='loop-img' src='images.jpeg' />");
   //     document.write("hello this should be a picture");

}
}
