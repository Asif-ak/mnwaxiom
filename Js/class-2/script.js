// var name=prompt("Your Name");
// var age =+prompt("age? ");

// in js = is assignment operator
// == comparison operator
// === coparision plus type check 

// in below example, because prompt is sending 55  as string
// we need to type cast it using '+' with prompt

// if (name !== "Osama" && age === 55){
//     alert("Welcome "+name);
// }

// else if (name == "Osama" && age === 55){
//     alert("Welcome "+name);
// }

// if (age > 10 && age < 15){
//     alert("eligible");
// }
// else { 
//     alert("get Lost");
// }

var cities =["karachi","Lahore","Multan",null,undefined];
console.log(cities);
console.log(cities.length);
// console.log(cities[4]);
cities.push(345);
console.log(cities);
cities[0]="hyderabad";
// delete cities[2]; // dont use it
cities.pop();
console.log(cities);


cities.splice(1,0,[1,2,3]);
console.log(cities);
console.log(cities[1][1]);
cities[1].forEach(element => {
    console.log(element);
});

// array in js is not primitive type,
// array is object type means
// it is mutable (primitives are immutable)
// assigning  one array to another and changing 
// the value of other will change the value of first 