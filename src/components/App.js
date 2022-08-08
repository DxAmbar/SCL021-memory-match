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

const App = (items = pokemon.items) => { 
  const doubledItems = items.concat(items);

let i = doubledItems.length, j, temp; //j es un número random que se generará en el loop. temp guarda el valor temporal para hacer los intercambios
    while(--i > 0){ //el array comienza con la cantidad total de cartas y cada vez va restando 1.
    j = Math.floor(Math.random() * (i+1))//establecemos valor para j, generamos un número random entre 0 e i
    temp = doubledItems[j]; // establecemos el temp. llamamos al índice j de nuestro array
    doubledItems[j] = doubledItems[i];//tomamos el array en su índice random (j) y lo cambiamos por el índice que está en el loop (i)
    doubledItems[i] = temp; //tomamos el la posición del índice (i)  y le damos el valor de temp.
    }

  //Creación de container y sus atributos
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'container');
  cardContainer.setAttribute('id', 'cardContainer');
  
  //Creación de cartas y sus atributos
  for (let i = 0; i < doubledItems.length; i++) {
    const card = document.createElement('div');
    let imageFront = document.createElement('img'); 
    let imageBack = document.createElement('img'); //imagen pokemon//

    card.className = 'card';
    cardContainer.appendChild(card);

    imageFront.setAttribute('src','img/levels/lvl1/pokelvl1.png' );
    imageFront.setAttribute('class', 'imageFront'); 
    imageFront.setAttribute('alt', 'FrontCard');
    card.appendChild(imageFront);

    imageBack.setAttribute('src', doubledItems[i].image);
    imageBack.setAttribute('class', 'imageBack');
    imageBack.setAttribute('alt', doubledItems[i].id);
    card.setAttribute('id', doubledItems[i].id);
    card.appendChild(imageBack);

    //Darle la clase 'flip' al hacer click, esto hace que las cartas giren 
    card.addEventListener('click', (e) => { 
      card.classList.toggle('flip'); //le damos clase flip
      checkCards(e); //pasamos el evento
    });

   }
   //Función match
   const checkCards = (e) => {
     console.log(e);
     const clickedCard = e.target; //al hacer click el evento capturará data, y target va a ser el elemento donde hicimos click
     clickedCard.classList.add('flipped'); //se le da la clase flipped (sirve para la comparación de las cartas que se giran)
     const flippedCards = document.querySelectorAll('.flipped');//llamamos a todos los elementos con clase flipped
     const flip = document.querySelectorAll('.flip'); //llamamos a todos los elementos con la clase flip 
      if(flippedCards.length === 2){ // si se giran 2 cartas
       if(flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')){ //comparamos ambos
         console.log('match'); //si son iguales da match
         flippedCards.forEach(card => { //iteramos en el array
           card.classList.remove('flipped'); //quitamos la clase flipped
           card.style.pointerEvents = 'none'; //evitamos que se le haga click
         })
       } else{
         console.log('wrong');
         flippedCards.forEach((card) => { //iteramos en el array
          card.classList.remove('flipped'); //quitamos la clase flipped
          setTimeout(() => card.classList.remove('flip'), 1000); //quitamos la clase flip (para que se gire de nuevo) y ocurre en 1000 milisegundos
         });
        }
        //Alerta al terminar de jugar
        /*if(flip.length === 6) {
          alert('📣¡FELICITACIONES! 🏆🎆🥇')
     }*/
    }
   };

      return cardContainer;

};

export default App
