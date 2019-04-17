var name=prompt("Your Name");
var age =+prompt("age? ");

// in js = is assignment operator
// == comparison operator
// === coparision plus type check 

// in below example, because prompt is sending 55  as string
// we need to type cast it using '+' with prompt
if (name !== "Osama" && age === 55){
    alert("Welcome "+name);
}

else { 
    alert("get Lost");
}