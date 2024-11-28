
// TERNARY OPERATOR EXAMPLES

const active = true;

/*let msj = '';

if ( !active ) {
    msj = 'Active msj';
} else {
    msj = 'Inactive msj';
}*/

//const msj = ( active ) ? 'Activo' : 'Inactive';
//const msj = ( !active ) ? 'Activo' : null;
const msj = !active && 'Active';

console.log( msj );