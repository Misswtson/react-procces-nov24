
// DESTRUCTURING ASSIGNMENT


const people = {
    name: 'Aaron',
    age: 2,
    key: 'baby'
};

const { name, age, key  } = people;

//console.log( name, age, key );

const returnPeople = ({  age, key}) => {

    //console.log( name, age );
 return{
    keyName: key,
    years: age,
    location: {
        country:'France',
        city:'Lyon'
    }
 }
}

const { keyName, years, location: { country, city}} = returnPeople( people );

console.log( keyName, years );
console.log( country, city );