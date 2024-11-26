
// DESESTRCUTURING ARRAYS

const personajes = ['Bingo', 'Bluey', 'Chili'];
const [, , p3] = personajes;
console.log( p3 );

const returnArray = () => {

    return ['ABC', 456];
}

const [ letras, numeros] = returnArray();
console.log( letras, numeros );


// TO DO

const test = ( valor ) => {

    return[ valor, ()=>{ console.log('Hello Emma')}];

}

const [ nombre, setNombre ] = test ( 'Bingo' );

console.log( nombre );
setNombre();



