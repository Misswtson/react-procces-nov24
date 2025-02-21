import PropTypes from 'prop-types';

export const NewApp = ( { title, subTitle, name } ) => {


    return (
<>
  <h1 data-testid="test-tittle"> { title } </h1>
  {/* comand shift slach  */} 
  {/* <code> {JSON.stringify( NewMessage)}<code/>*/}
    <p>{ subTitle }</p>
    <p>{ name }</p>

    </>
    );
}

NewApp.propTypes = {
title: PropTypes.string.isRequired,
subTitle: PropTypes.number
}

NewApp.defaultProps = {
    name:'Emma',
    title:'Hola, soy Emma',
    subTitle: 'Lo lograras, ya lo veràs!!'
}