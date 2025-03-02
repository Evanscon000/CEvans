// LAB - JavaScript Basics
    // Create a script.js file. (CHECK)
    // Copy the directions from each question into the script.js file as comments. (CHECK)
    // Answer the question within the script.js file (CHECK)
    // Submit the script.js file on Blackboard (CHECK)



// 10 Tasks

    // 1. Dynamic Age Calculator (CHECK)
        // Use a traditional function to calculate the user’s age.
        // Prompt the user to enter their birth year using prompt() and store it in a variable.
        // Based on their input, determine how many years old they are.
        // Log the calculated age to the console: “Your age is:”

// function calculateAge(){
//     let birthYear = parseInt(prompt("Enter the year you were born: "));
//     let currentYear = new Date().getFullYear();
//     let currentAge = currentYear - birthYear;
//     console.log("You are " + currentAge + " years old!")
// }
//
// calculateAge();

    // 2. Simple Interest Calculator (CHECK)
        // Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
            // Simple Interest = (Principal × Rate × Time)/100
        // Prompt the user for the principal amount, rate of interest, and time in years using prompt().
            // Store each of these in a separate variable
        // Log the result to the console: “Your simple interest is:”

// function calculateSimpleInterest(){
//     let principal = parseFloat(prompt("Enter your principal: "));
//     let rate = parseFloat(prompt("Enter your rate: "));
//     let time = parseFloat(prompt("Enter your time"));
//     let simpleInterest = principal * rate * time / 100;
//     console.log("Your simple interest is: " + simpleInterest)
// }
//
// calculateSimpleInterest()

    // 3. Favorite Color Selector (CHECK)
        // Create an array with three colors.
        //     Use a traditional function named addColor to add a new color to an array.
            //     Takes one argument - the array of colors
        // Prompt the user to input a color name to add to the array.
        //     Prepend the users color to the existing array
        // Log the updated array to the console using: “Updated colors: “

// let colorArray = ["Red", "Green", "Blue"];
//
// function addColor(){
//     let userEnteredColor = prompt("Enter a color to add: ");
//     colorArray.unshift(userEnteredColor);
//     console.log("Updated colors are as follows: " + colorArray)
// }
//
// addColor()

// 4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
//     Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
//     If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
//     Log the result to the console using: “Days until the event: “.

// function calculateDaysUntil() {
//     let userEntersEventDate = prompt("Enter the event date in the YYYY-MM-DD format: ");
//
//     while (
//         userEntersEventDate.length !== 10 ||
//         userEntersEventDate[4] !== '-' ||
//         userEntersEventDate[7] !== '-'
//         ) {
//         userEntersEventDate = prompt("Invalid format! Please enter the date in YYYY-MM-DD format: ");
//     }
//
//     // Converting to Date objects
//     let eventDate = new Date(userEntersEventDate);
//     let today = new Date();
//
//     // Calculate the difference
//     let difference = eventDate - today;
//
//     // Convert to days (fixing the order of operations)
//     let daysUntil = Math.ceil(difference / (1000 * 60 * 60 * 24));
//
//     // Display result
//     console.log("Days until the event: " + daysUntil);
// }
//
// calculateDaysUntil();


// 5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
//     Takes one argument - user input for temperature
//     Prompt the user to input the temperature in Celsius.
//     Convert into Fahrenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//     "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “

// function classifyTemperature() {
//     let celsius = prompt("Enter the temperature in Celsius:");
//
//     // Check if the input is valid
//     if (isNaN(celsius)) {
//         console.log("Error: Please enter a valid number.");
//         return;
//     }
//
//     // Convert C>F
//     let fahrenheit = (celsius * (9 / 5)) + 32;
//
//     let classification = "";
//     if (fahrenheit > 100) {
//         classification = "Hot";
//     } else if (fahrenheit > 80) {
//         classification = "Warm";
//     } else if (fahrenheit < 40) {
//         classification = "Cold";
//     } else {
//         classification = "Chilly";
//     }
//
//     console.log("The temperature is: " + classification);
// }
//
// classifyTemperature();


// 6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
//     Log the updated array to the console: “ Updated students: ”

// let students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 18 }
// ];
//
// // Fat arrow function to modify a student's age
// const modifyStudentAge = () => {
//     let studentName = prompt("Enter the name of the student to modify:");
//
//     // Find student object by name
//     let student = students.find(s => s.name.toLowerCase() === studentName.toLowerCase());
//
//     // Check if the student exists
//     if (!student) {
//         console.log("Error: Student not found.");
//         return;
//     }
//
//     let newAge = prompt("Enter the new age for " + student.name + ":");
//
//     // Validate the age input
//     if (isNaN(newAge) || newAge.trim() === "") {
//         console.log("Error: Please enter a valid number for age.");
//         return;
//     }
//
//     // Update the student's age
//     student.age = parseInt(newAge);
//
//     console.log("Updated students: ", students);
// };
//
// modifyStudentAge();



// 7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
//     Prompt the user to input a grade as a number.
//     Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
//     Log the result to the console using: “The grade classification is: “

// // Fat arrow function to classify grade
// const classifyGrade = () => {
//     // Prompt the user to enter a grade
//     let grade = prompt("Enter the grade as a number:");
//
//     // Validate if input is number
//     if (isNaN(grade) || grade.trim() === "") {
//         console.log("Error: Please enter a valid number.");
//         return;
//     }
//
//     // Convert input to a number
//     grade = parseFloat(grade);
//
//     // Classifying the grade using ternaries
//     let classification = grade >= 90 ? "A" :
//         grade >= 80 ? "B" :
//             grade >= 70 ? "C" :
//                 grade >= 60 ? "D" : "F";
//
//     console.log("The grade classification is: " + classification);
// };
//
// classifyGrade();
//


// 8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
//     Use a fat arrow function named modifyItem to modify items in an array.
//     Takes two arguments - the shopping list array and the prompted new item form user.
//     Log the updated array to the console using: “Updated shopping list: “.

// Hardcoded shopping list array
// let shoppingList = ["eggs", "butter", "flour"];
//
// // Fat arrow function to modify items in the array
// const modifyItem = (list, newItem) => {
//     // Prompt the user to select an item to modify
//     let itemToModify = prompt("Enter the name of the item to modify:");
//
//     // Find the index of the item in the array
//     let itemIndex = list.indexOf(itemToModify.toLowerCase());
//
//     // Check if the item exists in the array
//     if (itemIndex === -1) {
//         console.log("Error: Item not found in the shopping list.");
//         return;
//     }
//
//     // Update the item in the array
//     list[itemIndex] = newItem.toLowerCase();
//
//     console.log("Updated shopping list: ", list);
// };
//
// let newItem = prompt("Enter the new item to add to the shopping list:");
//
// modifyItem(shoppingList, newItem);


// 9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “

// Fat arrow function to determine the current day of the week
// const weekdayDetector = () => {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const today = new Date().getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)
//     console.log("Today is: " + days[today]);
// };
//
// // Call the function
// weekdayDetector();

// 10. How Long Until Graduation
// Use a fat arrow function to determine today’s date.
//     Use the Date object to get the current day.
//     Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.

// Fat arrow function to determine today's date and days until graduation
// const daysUntilGraduation = () => {
//     const today = new Date();
//     const graduationDate = new Date("2025-05-17");
//
//     // Get day, month, and year for formatted output
//     const year = today.getFullYear();
//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     const month = monthNames[today.getMonth()];
//     const day = today.getDate();
//
//     // Determine the correct suffix for the day
//     const suffix =
//         day === 1 || day === 21 || day === 31 ? "st" :
//             day === 2 || day === 22 ? "nd" :
//                 day === 3 || day === 23 ? "rd" : "th";
//
//     // Calculate days until graduation
//     const difference = Math.ceil((graduationDate - today) / (1000 * 60 * 60 * 24));
//
//     // Log the formatted date and days until graduation
//     console.log(`Today is: ${year}, ${month} ${day}${suffix}`);
//     console.log(`And you have ${difference} days left in this web design program until graduation.`);
// };
//
// // Call the function
// daysUntilGraduation();



// Lab1 Complete!
