//Sort this array
let myTeam = [
    {name:"John",age:20}, 
    {name:"Jane",age:20}, 
    {name:"Jim",age:22}, 
    {name:"Ann",age:21}
];

myTeam.sort((a, b) => a.name.localeCompare(b.name));
console.log(myTeam);


//Give me the sum of the prices (try chaining methods) 
let items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

let total = items.map(item => item.price).reduce((sum, price) => sum + price, 0);

console.log(total); 


// Creates an empty object {}
// Name the empty object 'this'
// Set prototypes

let thisObj = Object.create(null); 

let prototypeObj = {
    greet: function() {
        console.log("Hello!");
    }
};

Object.setPrototypeOf(thisObj, prototypeObj);

thisObj.greet();