
import { heroes } from '../data/heroes';
import { getHeroebyId } from './08-imp-exp';

/*const promise = new Promise((resolve, reject) => {
  
    setTimeout(() => {


        const personajes = getHeroebyId(2);
        console.log(personajes);
        resolve(heroes);
        reject( 'Cannot be found');
       //console.log('3 seconds after') 
    }, 2000);
});

promise.then((heroe) => {
    console.log('Show Me the heroes', heroes)
})
.catch( err => console.warn ( err ));*/

const getHeroebyIdAsync = ( id ) => {

 return new Promise((resolve, reject) => {
  
        setTimeout(() => {
            const personajes = getHeroebyId(id);
            //console.log(personajes);
            if ( personajes ) {
                resolve( personajes ); 
            }else {
                reject( 'Cannot be found' );
            }
    
           //console.log('3 seconds after') 
        }, 2000);
    });

}

//getHeroebyIdAsync(4)
.then(console.log)
.catch( err => console.warn( err ))
