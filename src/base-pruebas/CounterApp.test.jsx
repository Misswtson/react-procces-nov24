import { fireEvent, render, screen,getByText} from '@testing-library/react';
import { CounterApp } from '../CounterApp';


describe('pruebas en CounterApp', () => {

    const valorIncial = 10;

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <CounterApp 
            value = { valorIncial }/> 
            );
        expect( container ).toMatchSnapshot();
     })
    
test('Debe mostrar el valor inicial de 100', () => { 
    render( <CounterApp 
        value = { valorIncial }/> 
        );
    expect( screen.getByText (10)).toBeTruthy();

    })

    test('Debe Incrementar con el boton +1', () => { 

        render( <CounterApp 
            value = { valorIncial }/> 
            );
            fireEvent.click( screen.getByText('+1'));
            expect( screen.getByText('11')).toBeTruthy();

    })

    test('Debe decrementar con el boton -1', () => { 

        render( <CounterApp 
            value = { valorIncial }/> 
            );
            fireEvent.click( screen.getByText('-1'));
            expect( screen.getByText('9')).toBeTruthy();

    })

    test('Debe decrementar con el boton -1', () => { 

        render( <CounterApp 
            value = { valorIncial }/> 
            );
            fireEvent.click( screen.getByText('-1'));
            expect( screen.getByText('9')).toBeTruthy();

    })

    test('Debe funcionar el boton reset', () => { 

        render( <CounterApp 
            value = { 450 }/> 
            );
            fireEvent.click( screen.getByText('+1'));
            fireEvent.click( screen.getByText('+1'));
            fireEvent.click( screen.getByText('+1'));
            //fireEvent.click( screen.getByText('Reset'));
            screen.debug();
            fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
            expect( screen.getByText('450')).toBeTruthy();

    })
});
