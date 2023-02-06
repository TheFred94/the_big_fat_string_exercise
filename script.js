"use strict;";

const generateOutput = document.querySelector("#generateoutput").addEventListener("click", showOutput);

function showOutput() {
  // variable for the the options
  let options = document.getElementById("options").value;
  //   Gets the value from the input field
  let input = document.getElementById("inputfield").value;
  let output = (document.getElementById("outputfield").value = input);
  // Variables for 1st option (0)
  let firstLet = input.substring(0, 1);
  let restName = input.substring(1);
  let capFirstLet = firstLet.toUpperCase();
  console.log(options);
  if (options === "0") {
    output = capFirstLet + restName;
  }
  document.getElementById("outputfield").value = output;
  console.log(output);
}
