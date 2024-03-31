let Guest_List : string[] = ['Mir Ahmad', 'Sher Ahmad', 'Sher Wali'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');

// }

let absentGuest : String = 'Mir Ahmad';
let newGuest : string = 'Gul Rehmat';

Guest_List[0] = newGuest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');

}

console.log(`Mr. ${absentGuest} is not comming in to the Party`);

console.log('Good News! We find big table so we are inviting 3 more guest.');

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Haji Rehmat');
Guest_List.push('Jamsal Khan');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');

}
