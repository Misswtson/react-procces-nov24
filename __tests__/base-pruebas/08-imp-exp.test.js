import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('test en 08-imp-exp', () => {
    test( 'getHeroeById debe retornar un heroe por ID', () => {
        const id  = 1;
        const heroe = getHeroeById( id );
        //console.log( heroe );
expect ( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
    })
})

describe('test en 08-imp-exp', ()=> {
    test('getHeroesByOwner Debe retornar un arreglo con los héroes de DC', () => {
        const owner ='DC';
        const dcHeroe = getHeroesByOwner ( owner );
        expect ( dcHeroe.length ).toBe(3);
        expect ( dcHeroe ).toEqual(heroes.filter((heroe => heroe.owner === owner )))
    })
})

describe('test en 08-imp-exp', ()=> {
    test('getHeroesByOwner Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner ='Marvel';
        const Heroes = getHeroesByOwner ( owner );
        expect ( Heroes.length ).toBe(2);
        expect ( Heroes ).toEqual(heroes.filter((heroe => heroe.owner === owner )))
    })
})