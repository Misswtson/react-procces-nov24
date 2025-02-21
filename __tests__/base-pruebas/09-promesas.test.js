
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Test en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un héroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {

       expect(hero).toEqual( { 
        id: 1, 
        name: 'Batman', 
        owner: 'DC' });
        
        done();
    });
         });      
});

describe('Test en 09-promesas', () => {

    test('getHeroeByIdAsync debe arrojar un error si no encuentra al héroe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error => {
            console.log( error );
        expect( error ).toBe( `No se pudo encontrar el héroe ${ id }`);
            done();
    });
         });       
});



