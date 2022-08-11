const heroes = {
    capi: {
        nombre: 'Capitan Ámerica',
        poder: 'Modificado para ser un super soldado'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Es extremadamente millonario'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Poderes aracnidos'
    }
}

export const buscarHeroe = ( id ) =>  {

    const heroe = heroes[ id ];

    return new Promise( ( resolve, reject ) => {

        if( heroe ){
            resolve( heroe );
        } else{
            reject( `No existe un héroe con el id ${ id }` );
        }

    })
}

export const buscarHeroeAsync = async( id ) =>  {

    const heroe = heroes[ id ];

        if( heroe ){
            return heroe;
        } else{
            throw `No existe un héroe con el id ${ id }` ;
        }
         
}

// EL resolve es lo que devulve si la promesa se cumple y si no se cumple se ejecuta el reject
const promesaLenta = new Promise( ( resolve, reject) => {
    setTimeout( () => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( ( resolve, reject) => {
    setTimeout( () => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( ( resolve, reject) => {
    setTimeout( () => resolve('Promesa Rapida'), 1000);
});


export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}