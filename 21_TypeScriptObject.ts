// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

// for example 

let personName : string = 'Mir Ahmad';
// example 
const Peron_Name : string[] = ['Gul Rehmat', 'Haji Rehmat', 'Wali Rehmat']

//  | is sign ka matlab OR hee
const Peron_Names : (string | number)[] = ['Gul Rehmat', 6 , 'Wali Rehmat']

// now we going to make objects

// data type of person object 
interface person {
    Age : number,
    Name : string,
Nationality: string,
Qualification : string,
Student : boolean,
}
// person object
let person : person = {
    Age : 34,
    Name : 'Mir Ahmad',
    Nationality : 'Pakistani',
    Qualification : 'B.Com',
    Student : true, 
}
// print person 
console.log(person);

// data type of Car object
interface car {
 Make : string
 Colour : string
 Automatic : boolean

}
// car object
let car : car = {
    Make : 'Toyota' ,
    Colour : 'Black',
    Automatic : true ,
}
console.log(car);