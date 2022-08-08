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

const App = (items = pokemon.items) => { //declaramos valor de items por si la constante no recibe el valor correcto
const doubledItems = items.concat(items); //se duplican las cartas de pokemon
let uncoveredCards = 0;
let time = false;
let pairs = 0;
let initTimer= 30;
let timer = 30;
let score = 0;
let moves = 0;
let showTimer = document.getElementById('tRemaining');
let showScore = document.getElementById('score');
let showMoves = document.getElementById('moves');

//Algoritmo de Fisher-Yates para barajar cartas
let i = doubledItems.length, j, temp; //j es un n° al azar que se generará en un ciclo y será guardado en temp.
    while(--i > 0){ //empieza con el total de cartas y va restando una
    j = Math.floor(Math.random() * (i+1))//j toma un valor y se genera función random entre 0 e i
    temp = doubledItems[j]; // se establece temp y se llama a j
    doubledItems[j] = doubledItems[i]; // se toma j y se cambia por i (índice del ciclo)
    doubledItems[i] = temp; //se toma i para dar un valor temporal temp.
    }
  


function countTime(){
  countdownTimer = setInterval(() => {
    showTimer.innerHTML = `Tiempo restante: ${timer} segundos`;
    timer--;
    if(timer < 0){
      clearInterval(tcountdownTime);
      blockCards(items);
      //loseAudio.play(); //Audio insertado
    }
  }, 1000, timer); 
}

    //Container y sus atributos
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'container');
  cardContainer.setAttribute('id', 'cardContainer');
  
   //Cartas y sus atributos
  for (let i = 0; i < doubledItems.length; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img'); //img pokebola
    let imageBack = document.createElement('img');  //img pokemon

    card.className = 'card';
    cardContainer.appendChild(card);

    imageFront.setAttribute('src','img/levels/lvl1/pokelvl1.png' ); //se selecciona imagen estática de pokebola
    imageFront.setAttribute('class', 'imageFront'); 
    imageFront.setAttribute('alt', 'FrontCard');
    card.appendChild(imageFront);

    imageBack.setAttribute('src', doubledItems[i].image); //imagen de pokemon recorriendo el array
    imageBack.setAttribute('class', 'imageBack');
    imageBack.setAttribute('alt', doubledItems[i].id);
    card.setAttribute('id', doubledItems[i].id);
    card.appendChild(imageBack);


    card.addEventListener('click', (e) => { 
      card.classList.toggle('flip'); //se indica clase flip
      checkCards(e); //al hacer click se activa el evento y se giran las cartas
    });

   //match de cartas
   const checkCards = (e) => {
     console.log(e);
     const clickedCard = e.target; //el click captura data, la que será el elemento target
     clickedCard.classList.add('flipped'); //se asigna clase para la comparación de cartas que se giran
     const flippedCards = document.querySelectorAll('.flipped');//llamamos a todos los elementos con clase flipped
     const flip = document.querySelectorAll('.flip'); //llamamos a todos los elementos con la clase flip 
      if(flippedCards.length === 2){ //se giran dos cartas
       if(flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')){ //se comparan las cartas giradas
         console.log('match'); //si son iguales da match
         flippedCards.forEach(card => { //iteramos en el array
           card.classList.remove('flipped'); //quitamos la clase flipped
           card.style.pointerEvents = 'none'; //se le quita la posibildad de seleccionar
         })
       } else{
         console.log('wrong');
         flippedCards.forEach((card) => { //iteramos en el array
          card.classList.remove('flipped'); //quitamos la clase flipped
          setTimeout(() => card.classList.remove('flip'), 1000); //se remueve la clase flip para que se escondan las tarjetas nuevamente
         });
        }
        //Alerta al terminar de jugar
        /*if(flip.length === 6) {
          alert('¡FELICITACIONES!')*/
     }

   };
  }

      return cardContainer;

};

export default App
