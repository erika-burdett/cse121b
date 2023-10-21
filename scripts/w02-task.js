/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

const myName = "Erika Burdett";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML= myName;

// Step 3: declare and instantiate a variable to hold the current year

const currentYear = 2022
// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture

const photoName = "Selfie"
const photoPath = "/week02/images/selfie.jpg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const photoElement = document.querySelector("img").src = photoPath
// photoElement.setAttribute("alt", photoName)
// photoElement.setAttribute("src", photoPath);


/* ARRAYS */

// // Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ["Massaman Curry", "Oreos", "Pineapple", "Mom's Homemade Bread"]

// // Step 2: place the values of the favorite foods variable into the HTML file

const foodEl = document.querySelector("#food")
foodEl.innerHTML=favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food

let moreFood = ["Salmon"]
// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(moreFood)


// Step 5: repeat Step 2

foodEl.innerHTML=favoriteFoods;
// Step 6: remove the first element in the favorite foods array

favoriteFoods.shift();
// Step 7: repeat Step 2
foodEl.innerHTML=favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2

foodEl.innerHTML=favoriteFoods;










