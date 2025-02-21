import { getByText, render, screen } from '@testing-library/react';
import { NewApp } from '../NewApp';


describe('pruebas en NewApp.jsx', () => {

    const tittle = 'Hola, soy Emma';
    const subTitle = 'Lo lograras, ya lo veràs!!'

   test('Debe hacer Match con el Sanpshot', () => { 
    const { container } = render(<NewApp tittle={ tittle } />);  
    expect( container ).toMatchSnapshot();
})

test('Debe mostrar el mensaje "Hola, soy Emma"', () => { 

    render( <NewApp tittle={ tittle }/>);
    expect (screen.debug());

 })

 test('Debe mostrar el titulo en un h1', () => { 
    render(<NewApp tittle={ tittle } />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain( tittle );
  })

  test('Debe mostrar el subtitulo enviado por props', () => { 
        
  render( 
    < NewApp 
        tittle = { tittle }
        subTitle ={ subTitle }
        /> 
        );
    expect( screen.getAllByText(subTitle).length ).toBe(1);
})
});
