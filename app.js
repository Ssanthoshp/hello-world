'use strict';

console.log("I am in the HTML");
alert("Welcome to my page!!!");

const usersName = prompt("Please select one of the 5 names(Alice, Bob, Charlie, Barbie or Stranger)");
console.log(usersName);

document.write("Hiya " +  usersName + " - Welcome to my page!!!") 

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
