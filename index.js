// function greet (){
//     console.log ("Hello world");
// }
// greet();

// function greet(name){
//     console.log("Hello " + name);
// }

// greet("John");//You have to call a function before it works

// function add (a, b, c){
//     return a + b + c; //return can be used for arithmetic operations for numbers
// }
// console.log(add(3,4,2));

// //OR
// //Arrow function
// const add2 =(a,b) => a +b;
// console.log(add2 (2,2));

// //Write a function that can multiply a number by the power of 2

// function multiply (a,) {
//     return a**2; //** is used for power/exponential
// }
// console.log(multiply(10));

// function func(){
//     console.log("this is the normal way of writing javascript fuction");
// }
// func(); // normal way of writing function

// const arrowfunc = () => {
//     console.log("this is the modern way of writing javascript fuction");
// };

// arrowfunc();//modern way of writing function


// //THE ANONYMOUS FUNCTION $ CALLBACKS: it does not have a name attached
// //it is using set timeout : it is used to delay a program
// setTimeout(function () {
//     console.log("Hello world"); // instead of console.log it can be alert
// }, 10000); //2000 means 2secs

// setTimeout(() => {
//     console.log("hello");   //This is different from the above due to the arrow function
// }, 2000);


//Write a function "square" that takes a number as input and returns its square.
//write a function "isEvenNumber" that returns true if a number is even and false if a number is odd

// function sayHello (){
//     console.log ("Hello world");
// }
// sayHello();

// function greet (name){
//     console.log ("Hello " + name);
// }
// greet("John");


// function square (a) {
//     return a**2; 
// }
// console.log(square(2));

// function isEvenNumber(num) {
//   return num % 2 === 0;
// }

// console.log(isEvenNumber(8)); 
// console.log(isEvenNumber(9));


//Regex(regular expressions)

//MASTERING JAVASCRIPT DOM MANIPULATION
//DOM: The Document object model, it is a tree like presentations of an html document that alows javascript to interact

//SELECTING ELEMENTS
//METHODS TO SELECT ELEMENTS:
//documents.getElementsById("id")
//documents.getElementsByClassName("class")
//documents.getElementsByTagName("tag")
//document.querySelector("selector")
//document.querySelectorAll("selector")





// //TARGETING BY ID
// const result = document.getElementById("title");
// console.log(result.innerText);

// const myName = document.getElementById("name");
// console.log(myName.innerText);

// //TARGETING BY CLASS NAME: we include[0]because ClassName returns collection of elements not a single element.
// const desc = document.getElementsByClassName("description");
// console.log(desc[0].innerText);

// //TARGETING BY TAG NAME: IT CAN BE USED TO TARGET THE P,H1,AND OTHER TAGS EVEN IF THEY DONOT HAVE AN ID OR CLASS
// const btn = document.getElementsByTagName("button")
// console.log(btn[0].innerText);

// const heading = document.getElementsByTagName("h1")
// console.log(heading[0].innerText);

//QUERY SELECTOR(ES6 - Modern Javascript)
// const ttle = document.querySelector("#title"); //if you are trying to target an id represent with an # 
// console.log(ttle.innerText)
// const name2 = document.querySelector("#name");
// console.log(name2.innerText)
// const descr = document.querySelector(".description");// if you are trying to target classname represent with a dot(.)
// console.log(descr.innerText)
// const btn = document.querySelector("button");
// console.log(btn.innerText)

//QUERYSELECTORALL: it is used for selecting more than one element with the same id,tag or class
// const allBtn = document.querySelectorAll(".my-btn");
// console.log(allBtn[0].innerHTML);

//CHANGING CONTENTS AND ATTRIBUTES
// const paragraph = document.querySelector("#text");
// paragraph.innerHTML="Hello World";//BEST WAY
//         //OR   THEY ARE BOTH THE SAME
// document.querySelector("#text").innerHTML="Hello World";

// const myName = document.querySelector("#name");
// myName.innerHTML="Georgina";

//            OR
//document.querySelector("#name").innerHTML="Georgina"; 

// const greeting = document.querySelector("#name");
// const btn= document.querySelector("button");

// btn.addEventListener("click",function(){
//    greeting.innerHTML = "Welcome Mike"
// });

// document.querySelector("button").setAttribute ("disabled", true); //for the disabled to work you have to add true or false.

// document.querySelector("p").style.color = "blue"; //it can be used to change text color
// document.querySelector("p").style.fontSize = "30px";

//HANDLING EVENTS
//USING IN-LINE METHOD
//USING ADDEVENTLISTENER
// const btn = document.querySelector("button");
// const paragraph = document.querySelector("p");
// const btn2 = document.querySelector("#Change");

// btn.addEventListener("click", function(){
//     alert("working")
//      paragraph.innerHTML = "This button is clicked";
// });

// btn2.addEventListener("click", function(){ //This can still be used to change other variables like font-size, font-family etc
//      paragraph.style.color = "Red"
// });

// btn.addEventListener("click", function(){
//     alert("This is the addeventlistener way of handling event");
// });

//CREATING NEW ELEMENTS
// const newElement = document.createElement("p");
// newElement.innerText = "THIS IS A NEW PARAGRAPH CREATED USING JAVASCRIPT"
// document.body.appendChild(newElement); // it is used to call it out to the webpage

// const btn = document.createElement("button");
// btn.innerText = "Click me"
// document.body.appendChild(btn);

// btn.addEventListener("click", function(){
//      alert("Welcome");
// });


//for removing elements: it can be used for both texts and buttons
// const newBtn = document.createElement("button");
// newBtn.innerText = "Click me"
// document.body.appendChild(newBtn);

// const newParagraph = document.createElement("p");
// newParagraph.innerText = "A paragraph"
// document.body.appendChild(newParagraph);

// newBtn.addEventListener("click", function(){
//      newParagraph.remove();
// });


//Write a programme that create a div with the text "product" inside whenever a button is clicked; button should be added to cart
// const cartButton = document.createElement("button")
// cartButton.innerHTML = "Add to cart"
// cartButton.style.backgroundColor = "green"
// document.body.appendChild(cartButton)

// cartButton.addEventListener("click", function(){
//      const productDiv = document.createElement("div")
//      productDiv.innerHTML = "Product";
//      document.body.appendChild(productDiv);
// });

//Assignment: Add a list item dynamically
// const addItemButton = document.createElement("button");
// addItemButton.innerHTML = "Add to cart";
// document.body.appendChild(addItemButton);

// addItemButton.addEventListener("click", function() {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = "New item"
//     document.body.appendChild(listItem);
// });


// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const btn = document.querySelector("button");
// database_name = "John";

// btn.addEventListener("click",function(){
// const inputValue = nameInput.value
// const emailValue = emailInput.value
//        console.log(emailValue);
        
//     if(inputValue==="database_name"){
//         alert("You are logged in");
//     } else{
//         alert("Wrong credentials")
//     }
// });

//in-line way
// function example(){
//     alert ("This button is clicked");
// }
//also inline function
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");

// function logoutName() {           //After this then go call it out on the html like this <button onclick="logoutName()">Log out name</button> 
// const inputValue = nameInput.value
// const emailValue = emailInput.value
       
//    console.log(emailValue);
        
//     if(inputValue=== database_name){
//         alert("You are logged in");
//     } else{
//         alert("Wrong credentials")
//     }
// };



//REGEX : Regular expression
//Regex ia s powerful tool used to search, match and manipulate text based on specific patterns.
//it is commonly used in programming,data validation, search algorithms and text parsing

//use cases: 
//form validation
//searching and replacing text
//extracting data from string

//What is a string
//string is sequence of characters,it can be a word, sentence or any combination of characters

//Regex syntax
//1. /hello/ - This is a simple regex that matches the word "hello" in a string
// 2. Dot(.) - The dot matches any single character except for newline characters.
// 3. /d: represents digit character, it matches any digit from 0 to 9.
// 4. /w: represents word character, it matches any alphanumeric character (letters and digits) and underscore.
// 5. /s: represents whitespace character, it matches any whitespace character (spaces, tabs, newlines).
// 6. ^: This is used to match the start of a string.
// 7. $: This is used to match the end of a string.


// const pattern = /hello/;
// console.log(pattern.test("hello world"));//it returns true or false

// const animal = /c.t/;// the dot matches every single character
// console.log(animal.test("Is this your cat"));

// const animal = /\d/;// this tests for a digit
// console.log(animal.test("cat123"));// returns true cos it includes a digit

// const animal = /\s/;// checks for white spaces
// console.log(animal.test("Hello-world"));// this returns false cos it has no white spaces.

// const animal = /^Hello/;// checks if the string is at the start
// console.log(animal.test("Helloo world")); // it returns true as long as the sting is still part of the test

// const animal = /Hello$/;// checks if the string is at the end
// console.log(animal.test("Hello-world")); it will give false cos hello is not at the end of it

// const regex = /[a-z]/;
// console.log(regex.test("Javascript Class")); // logs out true since there is smallcase a-z in the string

// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})$/;
// console.log(emailRegex.test("testT12-mike@example.com.ng"))


//API:APPLICATION PROGRAMMING INTERFACE
// IT ALLOWS COMMUNICATION BETWEEN DIFFERENT SOFTWARE
//IT DEFINES HOW REQUESTS AND RESPONSES SHOULD BE HANDLED
//API CAN BE USED TO ACCESS DATA OR SERVICES FROM ANOTHER APPLICATION OR SERVER
