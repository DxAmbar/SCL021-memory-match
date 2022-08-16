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

const App = (items = pokemon.items) => { // Declaramos valor de items por si la constante no recibe el valor correcto
  const doubledItems = items.concat(items); // Se duplican las cartas de pokemon

  // Variables  
  let timer = 30;
  let flag = false;
  let moves = 0;
  let hits = 0;
  let showTimer = document.getElementById('tRemaining');
  let showMoves = document.getElementById('moves');
  let showHits = document.getElementById('hits');

  //Algoritmo de Fisher-Yates para barajar cartas
  let i = doubledItems.length, j, temp; //j es un n° al azar que se generará en un ciclo y será guardado en temp.
  while (--i > 0) { // Empieza con el total de cartas y va restando una
    j = Math.floor(Math.random() * (i + 1))//j toma un valor y se genera función random entre 0 e i
    temp = doubledItems[j]; // Se establece temp y se llama a j
    doubledItems[j] = doubledItems[i]; // Se toma j y se cambia por i (índice del ciclo)
    doubledItems[i] = temp; // Se toma i para dar un valor temporal temp.
  }

  // Función timer  
  let execute = false

  function countTime() {
    if (execute) {
      return
    }
    execute = true;
    function tRemaining() {
      showTimer.innerHTML = `Tiempo restante: <br> ${timer} segundos`;
      timer--;
      if (timer < 0) {
        clearInterval(countdownTimer);
        alert('¡Se acabó el tiempo!')
        flag = true;
        //loseAudio.play(); // Audio insertado 
      } 
    }
    tRemaining()
    let countdownTimer = setInterval(tRemaining, 1000, timer);

  }

  // Container y sus atributos
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'container');
  cardContainer.setAttribute('id', 'cardContainer');

  // Cartas y sus atributos
  for (let i = 0; i < doubledItems.length; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img'); // img pokebola
    let imageBack = document.createElement('img');  // img pokemon

    card.className = 'card';
    cardContainer.appendChild(card);

    imageFront.setAttribute('src', 'img/levels/lvl1/pokelvl1.png'); // Se selecciona imagen estática de pokebola
    imageFront.setAttribute('class', 'imageFront');
    imageFront.setAttribute('alt', 'FrontCard');
    card.appendChild(imageFront);

    imageBack.setAttribute('src', doubledItems[i].image); // Imagen de pokemon recorriendo el array
    imageBack.setAttribute('class', 'imageBack');
    imageBack.setAttribute('alt', doubledItems[i].id);
    card.setAttribute('id', doubledItems[i].id);
    card.appendChild(imageBack);


    card.addEventListener('click', (e) => {

      if (flag) {
        console.log("termino", flag)
        return

      }
      countTime()
      card.classList.toggle('flip'); // Se indica clase flip
      checkCards(e); // Al hacer click se activa el evento y se giran las cartas
    });

    // Match de cartas
    const checkCards = (e) => {

      const clickedCard = e.target; // El click captura data, la que será el elemento target
      clickedCard.classList.add('flipped'); // Se asigna clase para la comparación de cartas que se giran
      const flippedCards = document.querySelectorAll('.flipped');// Llamamos a todos los elementos con clase flipped
      const flip = document.querySelectorAll('.flip'); // Llamamos a todos los elementos con la clase flip 
      if (flippedCards.length === 2) { // Se giran dos cartas
        if (flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')) { // Se comparan las cartas giradas
          console.log('match'); // Si son iguales da match
          flippedCards.forEach(card => { // Iteramos en el array
            card.classList.remove('flipped'); // Quitamos la clase flipped
            card.style.pointerEvents = 'none'; // Se le quita la posibildad de seleccionar
            hits++; // Aumento de aciertos
            showHits.innerHTML = `Aciertos: ${hits / 2}`; // Lo dividimos en 2 porque nos aumentaba de 2 en 2
          })
        } else {
          console.log('wrong'); 
          flippedCards.forEach((card) => { // Iteramos en el array
            card.classList.remove('flipped'); // Quitamos la clase flipped
            setTimeout(() => card.classList.remove('flip'), 1000); // Se remueve la clase flip para que se escondan las tarjetas nuevamente
          });
        }
        moves++;
        showMoves.innerHTML = `Movimientos: ${moves}`;
        // Alerta al terminar de jugar
        if (flip.length === doubledItems.length) {
          // ClearInterval(countdownTimer)
          timer = 0;
          alert('¡FELICITACIONES!')
        }
      }

    };
  }

  return cardContainer;

};

export default App