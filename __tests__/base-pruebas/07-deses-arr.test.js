import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test en 07-deses-arr', () => {

    test('Debe retornar un string y un número', () => {

const [ letters, numbers ] = retornaArreglo ();

//expect( letters ).toBe( 'ABC'); 
//expect( letters ).toBe( 123 );

expect( typeof letters ).toBe( 'string'); 
expect( typeof numbers ).toBe( 'number' );



    })

 })