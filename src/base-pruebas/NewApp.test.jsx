import { getByText, render } from '@testing-library/react';
import { NewApp } from '../NewApp';


describe('pruebas en NewApp.jsx', () => {

    test('Debe hacer match con el snapshot', () => {

        const tittle ='Hola, soy Emma';
        const { container } = render( < NewApp tittle = { tittle }/> )
        expect( container ).toMatchSnapshot();
     })
    
    
     test('Debe hacer match con el snapshot', () => {

        const tittle ='Hola, soy Emma';
        const { container, getByText, getByTestId} = render( < NewApp tittle = { tittle }/> )
        expect( getByText ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain( tittle );
        expect( getByTestId('test-tittle').innerHTML ).toContain( tittle );
     })

     test('Debe mostrar el subtitulo enviado por props', () => { 
        
        const tittle ='Hola, soy Emma';
        const subTitle = 'Lo lograras, ya lo veràs!!';
        const { getByText } = render( 
        < NewApp 
            tittle = { tittle }
            subTitle ={ subTitle }/> 
            );
        expect( getByText (subTitle) ).toBeTruthy();
    })
});
