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
    // The first letter of a word
    let firstLet = input.substring(0, 1);
    // The rest of a word
    let restName = input.substring(1);
    // capitalizes the first letter
    let capFirstLet = firstLet.toUpperCase();
    // shows the output
    output = capFirstLet + restName;
  } else if (options === "1") {
    const fullName = input;
    let firstName = "";
    firstName = fullName.substring(0, fullName.indexOf(" "));
    output = firstName;
    console.log(firstName);
  } else if (options === "2") {
    fullName = input;
    let firstName = "";
    firstName = fullName.substring(0, fullName.indexOf(" "));
    output = firstName.length;
    console.log(firstName.length);
  } else if (options === "3") {
    const name = input;
    let firstName = "";
    let middleName = "";
    let lastName = "";
    firstName = name.substring(0, name.indexOf(" "));
    middleName = name.substring(name.indexOf(" "), name.lastIndexOf(" "));
    lastName = name.substring(name.lastIndexOf(" "));
    output = middleName;
    console.log(middleName);
  } else if (options === "4") {
    const fileName = input;
    const files = [".jpg", ".png", ".gif", ".tiff", ".webp"];
    output = files.some((files) => fileName.endsWith(files));
    console.log(output);
  } else if (options === "5") {
    const password = input;
    let passwordLength = password.length;
    let hidePassword = "*".repeat(passwordLength);
    output = hidePassword;
    console.log(output);
  } else if (options === "6") {
    const name2 = input;
    // takes the first two letters of the word
    const firstTwo = name2.substring(0, 2);
    // takes the 3rd letter of the word
    const thirdLet = name2.substring(2, 3);
    // Capitalized the 3rd letter of the word
    const capThirdLet = thirdLet.toUpperCase();
    // takes the rest of the word
    const restWord = name2.substring(3);
    output = firstTwo + capThirdLet + restWord;
    console.log(output);
  } else if (options === "7") {
    output = "";
    // This turns the input from the inputfield into an array
    // It then iterates trough every letter and checks if there is either a " " or "-" before the following letter
    // If there is it takes the letter and makes it an uppercase letter
    // If not it doesn't touch it.
    Array.from(input).forEach((letter, i) => {
      console.log(Array.from(input));
      if (input[i - 1] === " " || input[i - 1] === "-") {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    });
  }
  document.getElementById("outputfield").value = output;
  console.log(output);
}
