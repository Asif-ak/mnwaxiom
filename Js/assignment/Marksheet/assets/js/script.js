"use strict";

var subjects= new Array (5);
subjects[0] = Math.floor(Math.random() * (100 - 60 + 1)) + 60;  // cannot fail
subjects[1] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;    // can fail
subjects[2] = Math.floor(Math.random() * (100 - 60 + 1)) + 60;  // cannot fail 
subjects[3] = Math.floor(Math.random() * (100 - 0 + 1)) + 0;    // can fail
subjects[4] = Math.floor(Math.random() * (100 - 60 + 1)) + 60;  // cannot fail

// ES6 will consume below method 
var obtainedmarks = om => subjects.reduce((a , b) => a + b, 0);

// otherwise use below
function getSum(total, num) {
    return total + num;
}

var obm = subjects.reduce(getSum);
var totalmarks=500;

var percentage=(obm / totalmarks) * 100;



function checkminimum(score){
    return score >=60;
}

var grade=subjects.every(checkminimum);

console.log(subjects);
document.getElementById('TM').innerHTML=totalmarks.toString();

console.log(subjects.length);
document.getElementById('TS').innerHTML=subjects.length.toString();

console.log(obm);
document.getElementById('MO').innerHTML=obm.toString();

console.log(percentage+"%");
document.getElementById('percentage').innerHTML=percentage.toFixed(2).toString()+"%" ;

if(grade==false)
{
    console.log("You have failed the exam! LOOSER");
    document.getElementById('Grade').innerHTML="You have failed the exam! LOOSER";
}
else
{
    switch ((percentage >=90 && percentage <=100)?1:
            (percentage >=80 && percentage <=89)?2:
            (percentage >=70 && percentage <=79)?3:
            (percentage >=60 && percentage <=69)?4:0
            )
     {
        case 1:
        console.log("A"); 
        document.getElementById('Grade').innerHTML="A Grade. Well Done!!";
        break;
        case 2:
        console.log("B"); 
        document.getElementById('Grade').innerHTML="B Grade. Good Job!!";
        break;
        case 3:
        console.log("C"); 
        document.getElementById('Grade').innerHTML="C Grade. Keep Trying!!";
        break;
        case 4:
        console.log("D"); 
        document.getElementById('Grade').innerHTML="D Grade. Better Luck Next Time!!";
        break;
    
    }
    
}
document.getElementById('Maths').innerHTML=subjects[0].toString();
document.getElementById('Physics').innerHTML=subjects[1].toString();
document.getElementById('Chemistry').innerHTML=subjects[2].toString();
document.getElementById('English').innerHTML=subjects[3].toString();
document.getElementById('Islamiate').innerHTML=subjects[4].toString();
