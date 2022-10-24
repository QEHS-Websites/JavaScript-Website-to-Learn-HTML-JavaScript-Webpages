//Debugging line to console ensuring JavaScript Link
console.log("I made it to childTemplate.js!");

let stop = false; //Boolean for testNaN() validation function, see end of file
let radioButton;
let checkBoxButton = [];

function javaScriptTextField (a, b) { //submission after submit button
  return console.log("I said ... " + a + " " + b);
}
function javaScriptRadioButton () { //Submission after Radio Submit Button
  return document.getElementById("answerRadioButton").innerHTML = "I said ... " + radioButton;
}

function javaScriptcheckBoxButton () { //Submission after Radio Submit Button
  return document.getElementById("answerCheckBoxButton").innerHTML = "I said ... " + checkBoxButton.toString(); //note: checkboxButton.join(" * ")
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

//For Radio Button Click
function populateRadioButton(value) {
  radioButton = value; //Radio Buttons only allow 1 value at a time
  console.log(radioButton); //Verifies variable value to console after each click
}

//For Checkboxes
//Introduces JavaScript Array Methods: .toString() | .pop() | .push() | .shift() | .unshift() | .concat()
//Summary: .splice( indexPosition, amountRemoved, newElement(s) ) | .slice(startInclude, endNotInclude)
//Advanced: sort() | reverse() | compare function: function(a, b){return a - b} | Math.min.apply() | Math.max.apply
//CAUTION: .delete() leaves null at affected index
function populateCheckboxes(id, value) {
  //let checkbox = document.getElementById(id); //example using variable as intermediary 
  console.log(id, value);
  if ( document.getElementById(id).checked == true) {
    checkBoxButton.push(value); //checkboxes allow mutliple values
  } else {
    checkBoxButton.pop(value);
  }
  console.log( "Array Length is: " + checkBoxButton.length + "\t" + "Elements are: " + checkBoxButton.toString() ) //note: checkboxButton.join(" * ")
}
//CAUTION: this is a very simple algorithm that associates user-initiated ascending and descending checkbox clicks
//Known Error: do not click in order
//More sophisicated algorithms would use the ID as a number to .splice() single elements
