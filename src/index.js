import { buscarHeroe, buscarHeroeAsync } from './js/promesas.js';

buscarHeroe( 'capi' )
                                .then( heroe => console.log( heroe ) )
                                .catch( console.warn );

buscarHeroeAsync( 'spider' )
                                            .then( heroe => console.log(heroe) )
                                            .catch( console.log );