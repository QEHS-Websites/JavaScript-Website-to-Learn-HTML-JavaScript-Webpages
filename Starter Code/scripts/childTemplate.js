//Debugging line to console ensuring JavaScript Link
console.log("I made it to childTemplate.js!");

let stop = false; //Boolean for testNaN() validation function, see end of file
let radioButton;

function javaScriptTextField (a, b) { //Where console.log tested file goes
  return console.log("I said ... " + a + " " + b);
}
function javaScriptRadioButton () { //Where console.log tested file goes
  return document.getElementById("answerRadioButton").innerHTML = "I said ... " + firstNumber + " " + secondNumber;
}

//Main functions, necessary lines of code
function mainFieldText () {

  let firstNumber, secondNumber; //Variables particular to JavaScript Assignment, makes it work

  // Get the value of the Height Input Field, id="textfield1", assign it to a variable
  firstNumber = document.getElementById("textfield1").value;

  //Validate by ALERT or HTML Text in p-tag
  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  // Get the value of the Height Input Field, id="textfield2", assign it to a variable
  secondNumber = document.getElementById("textfield2").value;

  //Validate by ALERT or HTML Text in p-tag
  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart because I said so." //Change to more appropriate message
  }
  else {
    //Difference between calling functions with arguements and sending to parameter's, local variables
    javaScriptTextField (firstNumber, secondNumber); // Change to more appropriate message
    document.getElementById("answerTextField").innerHTML = "I said ... " + firstNumber + " " + secondNumber;
  }
}

//Functions that are used mutliple times in the previous program
//DO NOT need to be focused on, read afterwards
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are NOT values of REAL Number System
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }
}

function populateRadioButton(value) {
  radioButton = value;
  console.log(radioButton);
}
