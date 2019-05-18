// chapter 1
// alert wont work without html. use console.log instead
// alert("Hello World");
console.log('Hello World')

// chapter 2
var name ="Mark";
console.log(name);
name='Ace';
console.log(name);

var nat;
nat = 'U.S.';
console.log(nat);

// alert(nat)

//chapter 3

var weight =150;
weight=weight+55;
console.log(weight);

var num = "20";
var newnum = 20;
console.log(num+newnum);

//var 1pres ="abc"; // that variable declaration is illegal
var first1pres="def"; // that is legal

console.log(newnum);

console.log(typeof(newnum));

// alerting the number will convert it to string

// chapter 4
// naming conventions
// 1 can contain : letter, number, underscore, dollarsign, js keywords
// 2 cannot contain: spaces 
// 3 cannot start with: number
// 4 use camelcase e.g newNumber, somethingImportant, codeRunner

// chapter 5
// alert(2+2);

// alert(9%3);

// chapter 6

num=1;
// newnum=num++; // will result in 1 bcoz the value of num is assigned to newnum prior to increament.
newnum=++num; // will get 2 bcoz the value of num is assigned to newnum after increament
// alert(newnum);

num=2;
// newnum=num--;
newnum=--num;
// alert(newnum);

// alert(1+3*4); // precedance rule (multiplication first as in algebra)
// if we use brackets, precedence will be overriden
// alert(((2*4)*4)+2);

// var a=prompt("please enter name");
// alert("thanks "+a);

// concatenating number with string will result in string. see below
// alert("2 + 2 equals " + 2+2);

// enums out of curiosity :)
const days={monday:0, tuesday:1, wednesday:2, thursday:3, friday:4, saturday:5, sunday:6};
// alert(days.monday);

// chapter 9
var a='hello';
var b='World';

// prompt(a,b)

// chapter 10
// var d=true;
// if (d) {
    // alert(true);
// }

// chapter 11
// = assignement operator
// == equality operator
// === type equality operator

console.log(2==2);
var e='12';
console.log(typeof(e));
var f='12';
var g ='h'
console.log(typeof(f));
// alert('12'=='hello')
console.log(e===f); //true // it will only be true if both type and contents are same otherwise false
console.log(f===g); // false

console.log(2===3);// false

// chapter 12
