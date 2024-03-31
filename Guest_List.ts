let Guest_List : string[] = ['Mir Ahmad', 'Sher Ahmad', 'Sher Wali'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');

}

let absentGuest : String = 'Mir Ahmad';
let newGuest : string= 'Gul Rehmat';

Guest_List[0] = newGuest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');

}

console.log(`Mr. ${absentGuest} is not comming in to the Party`)