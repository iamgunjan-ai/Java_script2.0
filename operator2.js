// operators 
// arithmetic(+,-,*,/), modulus(%), exponentition(power),increment(++,+1), decrement(--,-1)

let a = 7;
let b=5;
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

//modulus give the remainder

console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(a--);

console.log(a==b);
console.log(a!=b);

console.log(a===b);
console.log(a!==b);


//condition statement

// if else

let age=25;
if(age>18){
    console.log("you are Vote");
}
else{
    console.log("Not able to vote");
}

// even odd

let num=12;
if(num%2==0){
    console.log("Even number");
}
else{
    console.log("Odd number")
}


let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue";
}
else if (mode="pink"){
    color="pink";
}
else{
    color="white";
}
console.log(color);

//switch

const exp='apple';
switch(exp){
    case 'orange':
        console.log("this is orange");
        break;
    case 'apple':
        console.log("this is apple");
        break;
    case 'lichi':
        console.log("this is lichi");
        break;
    default:
        console.log("sorry not match");
}
  

let num2=15;
if(num2%5==0){
    console.log("this number is multiple of 5");
}
else{
    console.log("this number is not multiple of 5");
}


