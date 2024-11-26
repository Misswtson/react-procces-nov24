//import { heroes } from './data/heroes';

import { heroes } from '../data/heroes'

// OPTION 1

/*const getHeroebyId = (id) => {

return heroes.find((heroe) => heroe.id === id ); 

}*/

// OPTION 2

//UNSING .FIND

export const getHeroebyId = (id) =>  heroes.find((heroe) => heroe.id === id ); 
    
//console.log( getHeroebyId(2) );

//UNSING .FILTER

export const getHeroebyOwner = (owner) =>  heroes.filter((heroe) => heroe.owner === owner ); 
    
//console.log( getHeroebyOwner('Marvel') );