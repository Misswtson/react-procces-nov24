//Function in JS

//01T raditional function
//const name = function( name ) {
    //return `Hello, ${ name }`;

//}

// 02 Arrow Function
const hello = ( name ) => {
    return `Hello, ${ name }`;
}

const hello2 = ( name ) => `Hello, ${ name}`;
const hello3 = (name ) => `Hello, ${ name }`;
const hello4 = () => `Hello to the Fam`;

console.log( hello ( 'Emma'));
console.log( hello2 ( 'Lalylu'));
console.log( hello3 ( 'Aaron'));
console.log( hello4 ());

//To Do
// Transform this in to an arrow function

/*const activeUser = getActiveUser('Emma');
function getActiveUser( name ) {
    return {
        uid: 'abc1234',
        username: name
    }
}
console.log( activeUser );*/
// return an implicit object
// run it

// DONE 

const getActiveUser = ( name )=> ({
    uid: 'abc1234',
    username: name
   });

   const activeUser = getActiveUser('Emma');
console.log( activeUser );
