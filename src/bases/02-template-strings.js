// Templates strings

const name = 'Aaron';
const lastName = 'Linares';

const fullName = ` ${ name } ${ lastName } `;

function getSaludo(name){
    return ' Hi ' + name;
}
console.log(`This is a text: ${ getSaludo( name )}`);
