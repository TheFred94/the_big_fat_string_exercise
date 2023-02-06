"use strict;";

const generateOutput = document.querySelector("#generateoutput").addEventListener("click", showOutput);

function showOutput() {
  // variable for the the options
  let options = document.getElementById("options").value;
  //   Gets the value from the input field
  let input = document.getElementById("inputfield").value;
  let output = (document.getElementById("outputfield").value = input);
  // Variables for 1st option (0)
  console.log(options);
  if (options === "0") {
    let firstLet = input.substring(0, 1);
    let restName = input.substring(1);
    let capFirstLet = firstLet.toUpperCase();
    output = capFirstLet + restName;
  } else if (options === "1") {
    const fullName = input;
    let firstName = "";
    firstName = fullName.substring(0, fullName.indexOf(" "));
    output = firstName;
    console.log(firstName);
  } else if (options === "2") {
  } else if (options === "3") {
  } else if (options === "4") {
  } else if (options === "5") {
  } else if (options === "6") {
  } else if (options === "7") {
  }
  document.getElementById("outputfield").value = output;
  console.log(output);
}
