

export const getUser = () => ({
        uid: 'ABC123',
        username: 'That_girl124'
});



// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

export const usuarioActivo = getUsuarioActivo('Emma');
console.log( usuarioActivo );



