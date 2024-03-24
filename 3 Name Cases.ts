let personName : string  = '';
personName = prompt('What is you name?') || '';

let lowercase : string = personName.toLowerCase();
let uppercase : string = personName.toUpperCase();

let titlecase : string = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here is you namein:
    LowerCase: ${personName}
    UpperCase: ${personName}
    TitleCase: ${personName}`)
}
else{
    alert('Please fill you name!')
}