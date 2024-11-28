// PROMESAS ENCADENADAS

const apiKey = 'xqq0Zxf8U18h8qj6dhhtsai5c2jbf0sT';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);


// PROMESA NORMAL
/*petition.then( response => {
    response.json().then( data => {
        console.log( data );
    })
    //console.log(response);
})
. catch( console.warn);*/

// PROMESA CLEAN CODE

/*petition
.then( response => response.json())
.then( ( {data} ) =>{  // DATA DESESTRUCTURADA
    console.log( data.images.original.url );
})
.catch( console.warn);*/

petition
.then( response => response.json())
.then( ( {data} ) =>{  // DATA DESESTRUCTURADA
   const { url } = data.images.original;

   const img = document.createElement( 'img' );
   img.src = url;

   document.body.append( img );

})
.catch( console.warn);