let personName : string = 'Mir Ahmad';

personName = prompt('What is your Name') || '';

if(personName !==null && personName !==''){
alert(`Hello ${personName}, would you like to learn some Python today`)    
else(`You have to fill you Name`)
}
console.log(personName)