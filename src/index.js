import { buscarHeroe, buscarHeroeAsync } from './js/promesas.js';

buscarHeroe( 'capi' )
                                .then( heroe => console.log( heroe ) )
                                .catch( console.warn );

buscarHeroeAsync( 'spider2' )
                                            .then( heroe => console.log(heroe) )
                                            .catch( console.warn );