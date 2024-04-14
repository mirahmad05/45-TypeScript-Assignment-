let Guest_List : string[] = ['Mir Ahmad', 'Sher Ahmad', 'Sher Wali'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');
// }
let absentGuest : String = 'Mir Ahmad';
let newGuest : string = 'Gul Rehmat';
Guest_List[0] = newGuest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');
// }
// console.log(`Mr. ${absentGuest} is not comming in to the Party`);
// console.log('Good News! We find big table so we are inviting 3 more guest.');

// //add 3 more guest into array..
// Guest_List.unshift('Sir Zia Khan');
// Guest_List.splice(2 , 0 , 'Haji Rehmat');
// Guest_List.push('Jamsal Khan');

// //here i print 6 guest array..
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our Party. \n\nThank You!\n\n');
// }

// //Sorry Message for thous guest who are not invited..
// console.log('\nSorry we can not arrange big table, only TWO peoples will be invided.');

// //Removed Guest for using his formula ... 
while(Guest_List.length > 2){
    let removeGuest = Guest_List.pop();
//     console.log(`Sorry Mr. ${removeGuest}, You are not invited for Dinner`);
// } 

// //Remaining 2 Invited Guest..
// for(let i=0; i<Guest_List.length; i++){
//     console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nYour are still invited. \n\nThank You!\n\n');
// }
// //Removed All Guest from Array..
Guest_List.splice(0, 2);
console.log(Guest_List);

// Exercises 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guests are: ${Guest_List.length}`);
