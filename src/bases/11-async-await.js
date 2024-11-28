// ASYNC & AWAIT PROMISE

//const getImagePromise =  () => new Promise((resolve => resolve('https://create-react-app.dev/')));
//getImagePromise().then(console.log);

const getImage = async () =>{
    try {
    const apiKey = 'xqq0Zxf8U18h8qj6dhhtsai5c2jbf0sT';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
    const {data} = await response.json();
    const { url } = data.images.original;
    const img = document.createElement( 'img' );
    img.src = url;
    document.body.append( img );
        
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
    

}
getImage();

//console.log( getImage ());

