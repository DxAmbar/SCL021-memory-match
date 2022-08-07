//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon.items);

//const pokemonCards = pokemon.items

const App = () => {

  let pokemonCards = pokemon.items; 
  
    const el = document.createElement('div');
    el.className = 'App';
    el.innerHTML = `<table> <tr> 
    <td>
     <p>${pokemon.items[0].id}</p> 
    <img src="${pokemon.items[0].image}">
    </td>
    <td>
   <img src="${pokemon.items[0].image}">
   </td>
  </tr>
  <tr> 
    <td>
    <img src="${pokemon.items[1].image}">
    </td>
    <td>
   <img src="${pokemon.items[1].image}">
   </td>
  </tr>
  </table>`;
    return el;

};

export default App

/*
const root = document.querySelector('.root')
let cardsChosen = []
let cardsChosenId = []

// primera función
function createBoard(){
    for(let i = 0; i<pokemon.items.length; i++){
      let card = document.createElement('img')
      card.setAttribute('src', 'img/levels/lvl1/pokelvl1.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      root.appendChild(card)
    }
}
// second function
function flipCard(){
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(pokemonCards[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', pokemonCards[cardId].img)
}

createBoard()
<section class="section1">
            <table>
                <tr>
                "
                    <td><button id="0" onclick="uncover(0)"></button></td>
                    <td><button id="1" onclick="uncover(1)"></button></td>
                    <td><button id="2" onclick="uncover(2)"></button></td>
                </tr>
                <tr>
                    <td><button id="3" onclick="uncover(3)"></button></td>
                    <td><button id="4" onclick="uncover(4)"></button></td>
                    <td><button id="5" onclick="uncover(5)"></button></td>
                </tr>
            </table>
        </section>*/