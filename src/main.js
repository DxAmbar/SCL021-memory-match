import App from './components/App.js';
import pokemon from './data/pokemon/pokemon.js';

let pokemonItems = pokemon.items


document.getElementById('root').appendChild(App(pokemonItems.slice(0,3))); 
console.log(document.getElementById('root'))


/*document.getElementById('root').innerHTML = ""
document.getElementById('root').appendChild(App(pokemonItems.slice(0,5))); */