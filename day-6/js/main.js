console.log("hello world from the js file");

// WE HAVE TO ALWAYS THANK THE JS TEAM :  pointeur 
/*var x;
var y = 5;
var z = "25";

console.log(x,y,z);


y = "19";

y=y+1
// concat 19 +1  "191"

y=y*2;

console.log(y);*/


//Math op
/**
 * z*2
38
z/2
9.5
z**2
361
z%10
9
z++;
19
z
20
++z;
21
z--;
21
--z;
19
z+=1;
20
z-=1;
19
z*=5;
95
 */


//TYPES
/**
 * 
 * typeof "hello world"
"string"
typeof 3.14
"number"
typeof NaN
"number"
z = "dss"/15;
NaN
typeof true
"boolean"
typeof new Date()
"object"
typeof function(){}
"function"
typeof null
"object"
typeof { "key":"value" }
"object".

typeof []
"object"


 */


//DEC
/*
var b = "hello";
var a = "world";

console.log(a);
console.log(window);

let c = "test";


console.log(x);


console.log("test");*/



//CONDI
/**
 * if (condition) {
    
}

if (condition) {
    
} else {
    
}

if (condition) {
    
} else if(condi) {
    
}else{
    
}


 */
/*
switch (a) {
    case "value":
        
        break;
        case "value":
        
        break;

        case "value":
        
            break;

    default:
        break;
}*/
/*
while (condition) {
    
}

do {
    
} while (condition);*/

/**
 * 5==6
false
5>9
false
5>=5
true
5=="5"
true
5 === "5"
false
5 === 5
true
( ( 5 == 5 ) && ( 5 > 9 ) )
false
( ( 5 == 5 ) || ( 5 > 9 ) )
true
 */

/******************************************************************************* */

//FUNCTION
/*
function somme(a,b){
    return (a+b);
}


var x = somme(15,5);

console.log(x);


const multi = (a,b)=>{
    return (a*b);
}

const sous = (a,b)=>  a - b;


// callback ?
// operation A = > b


var r = multi(5,2);

console.log(r);*/

/*
var fruits = [ "Banana","Orange","Apple","Mongo" ];
fruits
(4) ["Banana", "Orange", "Apple", "Mongo"]
fruits.pop()
"Mongo"
fruits
(3) ["Banana", "Orange", "Apple"]
fruits.push("KIwi")
4
fruits
(4) ["Banana", "Orange", "Apple", "KIwi"]
fruits.shift()
"Banana"
fruits
(3) ["Orange", "Apple", "KIwi"]
fruits.sort()
(3) ["Apple", "KIwi", "Orange"]
fruits.reverse();
(3) ["Orange", "KIwi", "Apple"]
fruits.push(2021)
4
fruits
(4) ["Orange", "KIwi", "Apple", 2021]
fruits[1] = null;
null
fruits
(4) ["Orange", null, "Apple", 2021]
fruits.splice(1,1)
[null]
fruits
(3) ["Orange", "Apple", 2021]

*/


//CALCUL moy
/*
var moy = [ 18,19,16,13,15,14,16,15,12,13,16,18,19 ];




function calcMoy(){
    let s = 0;

    for (let i = 0; i < moy.length; i++) {

        const note = moy[i];
        s+= note;
        
    }

    let res = (s/(moy.length));

    return res;
}

function maxMoy(){
    let max = 0;
    // pour chaque elemenet "m"
    moy.map((m)=>{
        if (m>= max) {
            max = m;
        }
    })

    return max;
}

function minMoy(){
    let min = maxMoy();
    // pour chaque elemenet "m"
    moy.map((m)=>{
        if (m < min ) {
            min = m;
        }
    })

    return min;
}



// Moy final : --
console.log("Moy final : "+calcMoy())

// Moy max : --
console.log("Moy Max : "+maxMoy())

// Moy min : --
console.log("Moy min : "+minMoy())


var moyFinalElement = document.getElementById("moy-f");
var moyMaxElement = document.getElementById("moy-max");
var moyMinElement = document.getElementById("moy-min");

moyFinalElement.innerHTML=calcMoy();
moyMaxElement.innerHTML = maxMoy();
moyMinElement.innerHTML = minMoy();*/


// contact list

var contacts = [
    { fullname:"chourabi taher" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher 2" , email:"tchourabi@gmail.com" },
    { fullname:"chourabi taher 3" , email:"tchourabi@gmail.com" }
];

var ContactListElement = document.getElementById("contacts-list");


function initBloc(){
    let blocHTML = '';

    contacts.map((c)=>{
        blocHTML+='<li> <p> <strong>'+c.fullname+'</strong> <br> <small>'+c.email+'</small> </p> </li>';

    })

    ContactListElement.innerHTML = blocHTML;
}

initBloc();



var fullnameInput = document.getElementById("fullname");
var emailInput = document.getElementById("email");


function addNewContact(){
    const fullname = fullnameInput.value;
    const email = emailInput.value;

    const newContact = { fullname: fullname , email: email };

    contacts.push(newContact);
    initBloc();
    
}
