function concatFun(ele) {
    var open = document.getElementById(ele);
    if (open.style.display == "none") {
        open.style.display = "block";
    } else {
        open.style.display = "none";
    }
}

const arr1 = ["Naushad", "Neha", "Azhar", "Shoeb", "Sharif", "Mahemud", "Vikas", "Rohit", "Sohil", "Faizan", "Adnan", "Akash"];
const arr2 = ["Akram", "Akshat", "Akshay", "Aman", "Anamika", "Anjali", "Anup", "Anwar", "Arif", "Ashok", "Bhogendra", "Dharmik"];
const arr3 = ["Dharvi", "Dhruv", "Digvijay", "Faizal", "Gufran", "Imran", "Irshad", "Jagrut", "Jaimin", "Janvi", "Juned", "Kaushik"];
const arr4 = ["Pooja", "Kaval", "Krunal", "Malhar", "Mili", "Moin", "Mukaddish", "Nirav", "Nisar", "Pranjal", "Noman", "Parth"];
const arr5 = ["Paurav", "Raju"];

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arr7 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const arr8 = [25, 26, 27, 28, 29, 30, 21, 32, 33, 34, 35, 36];
const arr9 = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
const arr10 = [48, 50];


const arr11 = ["Ramiz", "Ranjit", [1, 2]];
const arr12 = [[3, 4], "Rohit", "sameer"];





//1st Method
//JavaScript Array concat()
//1st Example Join two arrays:
const twoarr = arr1.concat(arr2);
document.getElementById("demo1").innerHTML = "<li>" + twoarr + "</li>";

//2nd Example Join Multiple arrays:
const multiplearr = arr1.concat("<br>", arr2, "<br>", arr3, "<br>", arr4, "<br>", arr5);
document.getElementById("demo2").innerHTML = "<li>" + multiplearr + "</li>";

//3rd Example Join two arrays: string or Number
const strNumber = arr1.concat(arr6);
document.getElementById("demo3").innerHTML = "<li>" + strNumber + "</li>";

//4th Example Concatenate nested arrays:
const nestedarr = arr1.concat(arr6, arr11, arr12);
document.getElementById("demo4").innerHTML = "<li>" + nestedarr + "</li>";





//2nd Method
//JavaScript Array copyWithin()
//1st Example  Copy the first two array elements to the last two array elements:
// const arr1 = ["Naushad","Neha","Azhar","Shoeb","Sharif","Mahemud","Vikas","Rohit","Sohil","Faizan","Adnan","Akash"];
document.getElementById("demo5").innerHTML = "<li>" + arr1.copyWithin(6, 10);

//2nd Example Copy the first two array elements to the third and fourth position:
// const arr1 = ["Naushad","Neha","Azhar","Shoeb","Sharif","Mahemud","Vikas","Rohit","Sohil","Faizan","Adnan","Akash", "Akram","Akshat","Akshay","Aman","Anamika","Anjali","Anup","Anwar","Arif","Ashok","Bhogendra","Dharmik" ];
document.getElementById("demo6").innerHTML = "<li>" + arr1.copyWithin(2, 0, 2);





//3rd Method
//JavaScript Array entries()
//1st Example entries() returns an Array Iterator object with key/value pairs:
//const arr2 = ["Akram","Akshat","Akshay","Aman","Anamika","Anjali","Anup","Anwar","Arif","Ashok","Bhogendra","Dharmik"];
const naushad = arr2.entries();

for (let x of naushad) {
    document.getElementById("demo7").innerHTML += "<li>" + x + "<br>";
};





//4th Method
//JavaScript Array every()
//1st Example Check if all values in ages[] are over 18:
const ages = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

document.getElementById("demo8").innerHTML = "<li>" + ages.every(checkAge);

function checkAge(age) {
    return age > 12;
};

//2nd Example Check if all answers are the same:
const survey = [
    { name: "Naushad", answer: "Yes" },
    { name: "Neha", answer: "Yes" },
    { name: "Azhar", answer: "Yes" },
    { name: "Shoeb", answer: "No" }
];

document.getElementById("demo9").innerHTML = "<li>" + survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
    // Return true for the first element
    if (index === 0) {
        return true;
    }
    else {
        // Compare the value of the previous element
        return (el.answer === arr[index - 1].answer);
    }
}

//3rd Example Check if all values are over a specific number:
const arr16 = [32, 33, 17, 40];

function checkAge3(age) {
    return age > document.getElementById("demo10").value;

}

function myFunction() {
    document.getElementById("demo11").innerHTML = arr16.every(checkAge3);
}






//5th Method
//JavaScript Array fill()
//1st Example
// const arr1 = ["Naushad", "Neha", "Azhar", "Shoeb", "Sharif", "Mahemud", "Vikas", "Rohit", "Sohil", "Faizan", "Adnan", "Akash"];

document.getElementById("demo12").innerHTML = arr1.fill("Kiwi");

//2nd Example 
// const arr2 = ["Akram", "Akshat", "Akshay", "Aman", "Anamika", "Anjali", "Anup", "Anwar", "Arif", "Ashok", "Bhogendra", "Dharmik"];
document.getElementById("demo13").innerHTML = arr2.fill("Kiwi", 2, 4);







//6th Method
//JavaScript Array filter()
//1st Example 
// const arr7 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

document.getElementById("demo14").innerHTML = arr7.filter(checkAge7);

function checkAge7(age) {
    return age >= 20;
}



//2nd Example 
function checkAge2(age) {
    return age > document.getElementById("demo15").value;
}

function myFilter() {
    const arr15 = [25, 26, 27, 28, 29, 30, 21, 32, 33, 34, 35, 36];

    document.getElementById("demo16").innerHTML = arr15.filter(checkAge2);
}





//7th Method
//JavaScript Array find()
//1st Example 
const arr17 = [3, 10, 18, 20];

document.getElementById("demo17").innerHTML = arr17.find(checkAge4);


function checkAge4(age) {
    return age > 10;
}


//2nd Example

const arr18 = [3, 10, 18, 20];
function checkAge5(age) {
    return age > document.getElementById("demo18").value;
}

function myFind() {
    document.getElementById("demo19").innerHTML = arr18.find(checkAge5);
}





//8th Method
//JavaScript Array findIndex()
//1st Example   
const arr19 = [25, 26, 27, 28, 29, 30, 21, 32, 33, 34, 35, 36];

document.getElementById("demo20").innerHTML = arr19.findIndex(checkAge8);

function checkAge8(age) {
    return age > 27;
}


//2nd Example
const arr20 = [25, 26, 27, 28, 29, 30, 21, 32, 33, 34, 35, 36];

function checkValue(x) {
    return x > document.getElementById("demo21").value;
}

function myFindIndex() {
    document.getElementById("demo22").innerHTML = arr20.findIndex(checkValue);
}





//9th Method
//JavaScript Array forEach()
//1st Example
let arr21 = "";
const arr22 = ["Naushad", "Neha", "Azhar", "Shoeb", "Sharif", "Mahemud", "Vikas", "Rohit", "Sohil", "Faizan", "Adnan", "Akash"];

arr22.forEach(myforEach);

document.getElementById("demo23").innerHTML = arr21;



function myforEach(item, index) {
    arr21 += index + ": " + item + "<br>";
}

//2nd Example
let arr23 = 0;
const arr24 = [65, 44, 12, 4];
arr24.forEach(myforEach1);

document.getElementById("demo24").innerHTML = arr23;

function myforEach1(item) {
    arr23 += item;
}

//3rd Example

const arr25 = [65, 44, 12, 4];
arr25.forEach(myforEach2)

document.getElementById("demo25").innerHTML = arr25;

function myforEach2(item, index, arr) {
    arr[index] = item * 10;
}





//10th Method
//JavaScript Array.from()
//1st Example

let arr26 = "ABCDEFG"
const arr27 = Array.from(arr26);

document.getElementById("demo26").innerHTML = arr27;





//11th Method
//JavaScript Array includes()
//1st Example

const arr28 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo27").innerHTML = arr28.includes("Mango");

//2nd Example
const arr29 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo28").innerHTML = arr29.includes("Orange", 1);





//12th Method
//JavaScript Array indexOf()
//1st Example
const arr30 = ["Banana", "Orange", "Apple", "Mango"];
let arr31 = arr30.indexOf("Apple");

document.getElementById("demo29").innerHTML = arr31;


//2nd Example
const arr32 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let arr33 = arr32.indexOf("Mango", 2);

document.getElementById("demo30").innerHTML = arr33;

//3rd Example
const arr34 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let arr35 = arr34.indexOf("Apple", -1);

document.getElementById("demo31").innerHTML = arr35;





//13th Method
//JavaScript Array.isArray()
//1st Example

const arr36 = ["Banana", "Orange", "Apple", "Mango"];
let arr37 = Array.isArray(arr36);

document.getElementById("demo32").innerHTML = arr37;

//2nd Example
let arr38 = "W3Schools";
let arr39 = Array.isArray(arr38);

document.getElementById("demo33").innerHTML = arr39;





//14th Method
//JavaScript Array join()
//1st Example
const arr40 = ["Banana", "Orange", "Apple", "Mango"];
let arr41 = arr40.join();

document.getElementById("demo34").innerHTML = arr41;

//2nd Example
const arr42 = ["Banana", "Orange", "Apple", "Mango"];
let arr43 = arr42.join(" and ");

document.getElementById("demo35").innerHTML = arr43;





//15th Method
//JavaScript Array Keys()
//1st Example
const arr44 = ["Banana", "Orange", "Apple", "Mango"];
const arr45 = arr44.keys();

let arr46 = "";
for (let x of arr45) {
    arr46 += x + "<br>";
}

document.getElementById("demo36").innerHTML = arr46;


//2nd Method
const arr47 = ["Banana", "Orange", "Apple", "Mango"];
const arr48 = Object.keys(arr47);

let arr49 = "";
for (let x of arr48) {
    arr49 += x + "<br>";
}

document.getElementById("demo37").innerHTML = arr49;





//16th Method
//JavaScript Array lastIndexOf()
//1st Example
const arr50 = ["Apple", "Orange", "Apple", "Mango"];
let arr51 = arr50.lastIndexOf("Apple");

document.getElementById("demo38").innerHTML = arr51;

//2nd Example
const arr52 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let arr53 = arr52.lastIndexOf("Apple");

document.getElementById("demo39").innerHTML = arr53;






//17th Method
//JavaScript Array length()
//1st Example
const arr54 = ["Banana", "Orange", "Apple", "Mango"];
let arr55 = arr54.length;

document.getElementById("demo40").innerHTML = arr55;

//2nd Example
const arr56 = ["Banana", "Orange", "Apple", "Mango"];
arr56.length = 2;

document.getElementById("demo41").innerHTML = arr56;




//18th Method
//JavaScript Array map()
//1st Example
const arr57 = [4, 9, 16, 25];
document.getElementById("demo42").innerHTML = arr57.map(Math.sqrt);


//2nd Example
const arr58 = [65, 44, 12, 4];
const arr59 = arr58.map(myMap);

document.getElementById("demo43").innerHTML = arr59;

function myMap(num) {
    return num * 10;
}

//3rd Example
const arr60 = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

document.getElementById("demo44").innerHTML = arr60.map(getFullName);

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}






//19th Method
//JavaScript Array map()
//1st Example

const arr61 = ["Banana", "Orange", "Apple", "Mango"];
arr61.pop();
document.getElementById("demo45").innerHTML = arr61;

//2nd Example
const arr62 = ["Banana", "Orange", "Apple", "Mango"];
let arr63 = arr62.pop();
document.getElementById("demo46").innerHTML = arr63;





//20 Method
//JavaScript Array prototype()
//1st Example
// Add a new method
    Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
  
  // Use the method on any array
  const arr64 = ["Banana", "Orange", "Apple", "Mango"];
  arr64.myUcase();
  document.getElementById("demo47").innerHTML = arr64;

  
//2nd Example
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const arr65 = new Person("John", "Doe", "blue");
  const arr66 = new Person("Sally", "Rally", "green");
  
  Person.prototype.nationality = "English";
  
  document.getElementById("demo48").innerHTML =
  "My father is " + arr65.nationality + "<br>" +
  "My mother is " + arr66.nationality;


  




//21 Method
//JavaScript Array push()
//1st Example
const arr67 = ["Banana", "Orange", "Apple", "Mango"];
arr67.push("Kiwi");

document.getElementById("demo49").innerHTML = arr67;

//2nd Example
const arr68 = ["Banana", "Orange", "Apple", "Mango"];
arr68.push("Kiwi", "Lemon");

document.getElementById("demo50").innerHTML = arr68;

//3rd Example
const arr69 = ["Banana", "Orange", "Apple", "Mango"];
arr69.push("Kiwi", "Lemon", "Pineapple");

document.getElementById("demo51").innerHTML = arr69;

//4th Example
const arr70 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo52").innerHTML = arr70.push("Kiwi");






//22 Method
//JavaScript Array reduce()
//1st Example
const arr71 = [175, 50, 25];
document.getElementById("demo53").innerHTML = arr71.reduce(myReduce);

function myReduce(total, num) {
  return total - num;
}


//2nd Example
const arr72 = [15.5, 2.3, 1.1, 4.7];

document.getElementById("demo54").innerHTML = arr72.reduce(myReduce1, 0);

function myReduce1(total, num) {
  return total + Math.round(num);
}






//23 Method
//JavaScript Array reduceRight()
//1st Example

const arr73 = [175, 50, 25];
document.getElementById("demo55").innerHTML = arr73.reduceRight(myReduceRight);

function myReduceRight(total, num) {
  return total - num;
}

//2nd Example
const arr74 = [2, 45, 30, 100];
document.getElementById("demo56").innerHTML = arr74.reduceRight(myReduceRight1);

function myReduceRight1(total, num) {
  return total - num;
}






//24 Method
//JavaScript Array reverse()
//1st Example
const arr75 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo57").innerHTML = arr75.reverse();






//25 Method
//JavaScript Array shift()
//1st Example

const arr76 = ["Banana", "Orange", "Apple", "Mango"];
arr76.shift();

document.getElementById("demo58").innerHTML = arr76;

//2nd Example
const arr77 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo59").innerHTML = arr77.shift();






//26 Method
//JavaScript Array slice()
//1st Example
const arr78 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const arr79 = arr78.slice(1, 3);

document.getElementById("demo60").innerHTML = arr79;


//2nd Example
const arr80 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const arr81 = arr80.slice(-3, -1);

document.getElementById("demo61").innerHTML = arr81;






//27 Method
//JavaScript Array some()
//1st Example
const arr82 = [3, 10, 18, 20];
document.getElementById("demo62").innerHTML = arr82.some(checkSome);

function checkSome(age) {
  return age > 18;
}


//2nd Example
const Arr83 = [4, 12, 16, 20];

function checkSome(x) {
  return x > document.getElementById("demo63").value;
}

function arrSome() {
  document.getElementById("demo64").innerHTML = Arr83.some(checkSome);}






//28 Method
//JavaScript Array sort()
//1st Example

const arr84 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo65").innerHTML = arr84.sort();


//2nd Example
const arr85 = ["Banana", "Orange", "Apple", "Mango"];
arr85.sort();
arr85.reverse();
document.getElementById("demo66").innerHTML = arr85;

//3rd Example
const arr86 = [40, 100, 1, 5, 25, 10];
arr86.sort(function(a, b){return a-b});
document.getElementById("demo67").innerHTML = arr86;

//4th Example
const arr87 = [40, 100, 1, 5, 25, 10];
arr87.sort(function(a, b){return b-a});
document.getElementById("demo68").innerHTML = arr87;

//5th Example
const arr88 = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order:
arr88.sort(function(a, b){return a-b});

// points[0] is now the lowest value:
document.getElementById("demo69").innerHTML = arr88[0];

//6th Exmaple
const arr89 = [40, 100, 1, 5, 25, 10];

// Sort the numbers in descending order:
arr89.sort(function(a, b){return b-a});

// points[0] is now the highest value:
document.getElementById("demo70").innerHTML = arr89[0];

//7th Exmaple
const arr90 = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order:
arr90.sort(function(a, b){return a-b});

// points[0] is now the highest value:
document.getElementById("demo71").innerHTML = arr90[arr90.length-1];






//29 Method
//JavaScript Array splice()
//1st Example

const arr91 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
arr91.splice(2, 0, "Lemon", "Kiwi");

document.getElementById("demo72").innerHTML = arr91;


//2nd Example
const arr92 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
arr92.splice(2, 2);

document.getElementById("demo73").innerHTML = arr92;

//3rd Example
var arr93 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements, remove 1: 
arr93.splice(2, 1, "Lemon", "Kiwi");

document.getElementById("demo74").innerHTML = arr93;






//30 Method
//JavaScript Array toString()
//1st Example

const arr94 = ["Banana", "Orange", "Apple", "Mango"];
let arr95 = arr94.toString();
document.getElementById("demo75").innerHTML = arr95;




//31 Method
// JavaScript Array unshift()
//1st Example

const arr96 = ["Banana", "Orange", "Apple", "Mango"];
arr96.unshift("Lemon", "Pineapple");

document.getElementById("demo76").innerHTML = arr96;






//32 Method
// JavaScript Array valueOf()
//1st Example

const arr97 = ["Banana", "Orange", "Apple", "Mango"];
const arr98 = arr97.valueOf();

document.getElementById("demo77").innerHTML = arr98;

//2nd Example
const arr99 = ["Banana", "Orange", "Apple", "Mango"];
const arr100 = arr99;

document.getElementById("demo78").innerHTML = arr100;





