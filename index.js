/* Exercises
Create a person object that contains three keys: name, age and country.
Use yourself as an example to set the values for name, age and country.

create a function logData(), that uses the person object to create a string
in the following format:
"Per is 35 years old and lives in Norway
Call the logData() function to verify that it works
 */

let person = {
    name: "Tie",
    age: 2,
    country: "Switzerland"
}
function logData(){
    let sentence = person.name + " is " + person.age + " years old and lives in " + person.country +"."
    return sentence
}
console.log(logData())

/*
less than 6 years old -> free
6 to 17 years old     -> child discount
18 to 26 years old    -> student discount
27 to 66 years old    -> full price
over 66 years old     -> senior citizen discount

Create a conditional statement (if/else/else if) that logs out the discount
The passenger will get based upon the value of the age variable

 */

let age = 67
    //Math.floor(Math.random()*100)+1;

let isFree = false;
let isDiscounted = false;
let studentDiscount = false;
let fullPrice = false;
let seniorCitizenDiscount = false;
let price;

if(age<=6){
    isFree = true;
    price = 0;
} else if(age<=17){
    isDiscounted = true;
    price = 3;
} else if(age<=26){
    studentDiscount = true;
    price = 4;
}else if(age<=66){
    fullPrice = true;
    price = 10;
}else{
    seniorCitizenDiscount = true;
    price = 5;
}

console.log("Your age is: "+age+ " and therefore you have to pay: "+price+"$.")
let largeCountries = ["Russia", "China", "USA", "Indonesia", "India", "Pakistan", "Australia"];

/*
Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China,
- India
- USA
- Indonesia
- Pakistan
 */

for(let i = 0; i< largeCountries.length; i++){
    console.log(largeCountries[i])
}

largeCountries.shift()
console.log(largeCountries)
largeCountries.pop()
console.log(largeCountries)
largeCountries.push("Tuvalu");
largeCountries.unshift(" Monaco")
console.log(largeCountries)
/*
You need to fix the largeCountries array, so that Russia and Australia
are added back to the array at the right places and Tuvalu and Monaco get taken away.
 */

largeCountries.shift()
console.log(largeCountries)
largeCountries.unshift("Russia")
console.log(largeCountries)
largeCountries.pop()
largeCountries.push("Australia")
console.log(largeCountries)

let dayOfMonth = 3;
let weekday = "Friday"

/*
If it is Friday the 13th log out 😱
Use &&
 */

if(weekday === "Friday" && dayOfMonth === 13){
    console.log("😱")
} else{
    console.log("Not Friday the 13th")
}

let hands = ["rock","paper","scissor"]
//Create a function that returns a random item from the array
function rPS() {
    let random = Math.floor(Math.random()*3)
    return hands[random];
}
console.log(rPS())

let fruit = ["orange","apple", "orange", "apple", "apple", "orange", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf")
/*
Create a function that puts appes onto the apple shelf and
oranges onto the orangeShelf. Use a for lop
a conditional statement and the textContent property
 */

function sort(){
    for(let i =0; i<fruit.length; i++){
        if(fruit[i]==="apple"){
            appleShelf.textContent += "apple "
        } else {
            orangeShelf.textContent += "orange "
        }
    }
}
sort()