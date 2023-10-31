// if else
let age=18
if (age>=18){
    console.log("user can vote")
}
else{
    console.log("user can not vote")
}

let age1=14
if (age>=18){
    console.log("user can vote")
}
else{
    console.log("user can not vote")
}


// even num check
let num =10
if (num%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

// and or operator

let firstname = "gunjan"
let age2 = 22
if(firstname[0]==="g" && age2>18){
    console.log("your name is start with g and age is above 18")

}
else{
    console.log("error")
}

let firstname1 = "gunjan"
let age3 = 22
if(firstname[0]==="h" ||  age3>18){
    console.log("your name is start with g or  and age is above 18")

}
else{
    console.log("error")
}

// nested if else

// let winnum = 19
// let userguess = +prompt("guess yor number")
// console.log(typeof userguess, userguess)

// switch statement

let day = 2
switch(day){
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wedenesday")
        break;
    case 4:
        console.log("thrusday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("invalid")

}