import './style.css';

import { buscarHeroe  as buscarHeroeCallback} from './js/callbacks.js'
import { buscarHeroe } from './js/promesas.js'

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

// Se hace uso del callback para manejar el error en caso de que exista
 //buscarHeroe( heroeId1, ( err, heroe1 ) => {
 //    
 //    if( err ){return console.error( err ); } 
 //
 //    buscarHeroe( heroeId2, (err, heroe2) => {
 //       
 //        if( err ){return console.error( err ); }
 //        
 //        buscarHeroe( heroeId3, (err, heroe3) => {
 //       
 //            if( err ){return console.error( err ); }
 //            
 //            console.log(`Enviando a la misión a ${heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre }`);
 //        });
 //    });
 //});

//  buscarHeroe( heroeId1 ).then( heroe1 => {
//     
//     //console.log(`Enviando a la misión a ${heroe.nombre}`);
//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a la misión a ${heroe1.nombre} y ${ heroe2}`);
//     });
//  })

// El promisa.all nos ayuda a ejecutar muchas promesas al mismo tiempo sin crear un infierno de promesas como el caso de callack Hell
Promise.all( [ buscarHeroe( heroeId1), buscarHeroe( heroeId2 ), buscarHeroe( heroeId3) ])
             .then( ([ heroe1,heroe2, heroe3]) => { // Utilizamos la desestructuracion de arreglos //
                console.log(`Mandando a la misión a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre}`);
}).catch( (err) => {
    alert(err);
}).finally( () => {
    console.log('Se termino el el promise.all');
});

console.log('Fin del Programa');
