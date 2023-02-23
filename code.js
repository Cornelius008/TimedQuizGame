console.log("Hello Neil");

console.log(2 + 4);

// What programming languagues do?
//1. Store Data - Variables.


let myname = "Neil";
let age = 44;

console.log(myname)
console.log(age)

myname = 5;
console.log(myname);

let Interaction = "How Are you Today?";
let TimeofDay = 18.30;

console.log(Interaction)

//2. Make Deciscions - Conditionals.


let isCool = true;
if(isCool){
    console.log("You Are Cool")
}
else{
    console.log("You Are Not Cool")
}

let password = "robot";
let enterValue = "robot";
if(enterValue == password){
    console.log("Acess Granted")
}
else{
    console.log("Acess Denied")
}
//3. Store complex data - Arrays.


let studens = ["Jack","Cornelius","Cathal","Rinalds","Neil"]
studens.push("Bartoz")
console.log(studens)
console.log(studens.length)
let ages = [3,5,67]
let combo = studens.concat(ages)
console.log (combo)

console.log(studens[0])
console.log(studens[1])
studens[0] = "Richard"
console.log(studens)
console.log(studens[0])
//4. Repeat actions - Loops.


for(let i = 0; i < 10; i ++){
    console.log(i)
}

for(let i = 1; i < 100; i++){
    console.log(i)
if(i < 50 || i > 59){
    console.log
}
}

let list = []
for(let i = 1; i < 10; i++){
    list.push(i)
}
console.log(list)

p = "john"
let p1 = p.toUpperCase();
console.log
for(let i = 0; i < studens.length; i ++){
    console.log(studens[i].toUpperCase())
}

//5. Create Functions.

function greet(n){
    console.log("Hello, " + n)
}

greet("Peter")
greet("Paul")

function Add(i, j){
    return i + j
}
let anwser = Add(4, 24)
console.log(anwser)

//-- Class Work --

//1.
function multiply(i, j){
    return i * j
}
let outcome = multiply(50, 23)
console.log(outcome)

//2.
function subtract(i, j){
    return i - j
}
let outcome2 = subtract2(50, 23)
console.log(outcome2)

//3.
