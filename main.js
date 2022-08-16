import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';

let pokemonItems = pokemon.items 

//nivel 1, por defecto
document.getElementById('root').appendChild(App(pokemonItems.slice(0,6))); 
console.log(document.getElementById('root'))

//nivel 2, se borra html anterior y se reemplaza por el que se está llamando, con más cartas
/*document.getElementById('root').innerHTML = ""
document.getElementById('root').appendChild(App(pokemonItems.slice(0,5))); */

//nivel 3, misma función que nivel 2, pero se agregan aún más cartas
/*document.getElementById('root').innerHTML = ""
document.getElementById('root').appendChild(App(pokemonItems.slice(0,5))); */