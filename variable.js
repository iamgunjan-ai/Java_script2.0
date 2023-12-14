//variacle and data types

// console.log is used for print 

//var: variable can re-declared and update .A global scope variable
//let: variable cannot be re-declared but can update .Ablock scope varibale.
//const: vraiable cannot be re-declaeraed or update .A block scope variable.



console.log("java script");
age=25;
console.log(age);
x= null;
console.log(x);
console.log(typeof(x))

//Data Types
// string , Number, boolean, undefined, BigInt,null, symbol.
//primitive data type (number,string,Boolean, bigint,null,undefined,symbol)
// Non-primitive data type(objects, arrays,function)
 

const student={
    fullname: "gunjan kumar",
    age: 21,
    rollNO: 63,
    cgpa:9.65,
    ispass: true
};
console.log(student);
console.log(student.age);
console.log(student.fullname);

const product={
    name: "ball pan",
    rating: 4,
    offer: 5,
    price:270,
}
console.log(product);
console.log(typeof(product));

 