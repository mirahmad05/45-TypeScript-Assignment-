// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Equality Test with string:", "Apple" === "Apple");

console.log("Equality Test with string:", "Apple" != "Apple");

console.log("Inequality test with string:", ("Apple" as string) != "Orange"); 

// • Tests using the lower case function
console.log("Lower Case Function Test: ", "HELLO".toLowerCase() === "hello");

// • Numerical tests involving equality and inequality, 
console.log("Equality Test with number:", 25 === 25);
 
console.log("Inequality Test with number:", 25 != 25);
console.log("Inequality Test with number:", (20 as number) != 25);
// greater than 
console.log("Greater than test: ", 10 > 5);
// less than, 
console.log("Less than test: ", 5 < 6);
// greater than or equal to, 
console.log("Greater than or Equal to: ", 10 >= 10);
//  less than or equal to
console.log("Less than or equal to: ", 5 <= 10);
// • Tests using "and" operators
console.log("Test Using AND Operators: ", 5===5 && 5 < 10); 
// • Tests using "and" and "or" operators
console.log("Test Using AND Operators: ", 5===5 || false); 

// • Test whether an item is in a array
const fruits :string[] = ['Nashpati', 'Apple', 'Banana', 'Papaya'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// • Test whether an item is not in a array
console.log('Test "Orange" in the array: ', fruits.includes("Orange"));

console.log('Test "Orange" in the array: ', !fruits.includes("Orange"));
