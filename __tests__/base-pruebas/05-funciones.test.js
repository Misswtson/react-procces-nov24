import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Test en 05-fuciones', () => {

    test('getUser debe retornar un objeto', () =>{
      const testUser =   {
            uid: 'ABC123',
            username: 'That_girl124'
    };
    const user = getUser();
console.log( user );
expect( testUser ).toEqual( user );

    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Emma'; 
        const testActiveUser =  getUsuarioActivo ( nombre );
        expect( testActiveUser ).toEqual({
            uid: 'ABC567',
            username: nombre
        });
        

    });
 })