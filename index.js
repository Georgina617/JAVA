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

//CHANGING CONTENTS
// const paragraph = document.querySelector("#text");
// paragraph.innerHTML="Hello World";//BEST WAY
//         //OR   THEY ARE BOTH THE SAME
// document.querySelector("#text").innerHTML="Hello World";

// const myName = document.querySelector("#name");
// myName.innerHTML="Georgina";

// const greeting = document.querySelector("#name");
// const btn= document.querySelector("button");

// btn.addEventListener("click",function(){
//    greeting.innerHTML = "Welcome Mike"
// });

// document.querySelector("button").setAttribute("disabled", true); //for the disabled to work you have to add true or false.

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

// newBtn.addEventListener("click", function(){
//      newBtn.remove();
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
const addItemButton = document.createElement("button");
addItemButton.innerHTML = "Add to cart";
document.body.appendChild(addItemButton);

addItemButton.addEventListener("click", function() {
    const listItem = document.createElement("li");
    listItem.innerHTML = "New item"
    document.body.appendChild(listItem);
});














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
