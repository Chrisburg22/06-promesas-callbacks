// Base de Datos
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

// Función que utiliza un callback, tambien se maneja el error de que no exita algun id
export const buscarHeroe =( id, callback ) => {

    const heroe = heroes[id];

    if( heroe ){
        callback( null,heroe );    
    } else {  
        callback(`No existe un héroe con el id ${ id }`);
    }
     
}