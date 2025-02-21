describe('Test en <DemoComponent/>', () => {
    test('This is a test', () => {

        // 1- Arrange - inicialización
        const message1 = 'Hola Emma';
    
        // 2- Act - estímulo
        const message2 = message1.trim();
    
        // 3- Assert - observar el comportamiento deseado
    
        expect( message1 ).toBe( message2 );
    })

})


