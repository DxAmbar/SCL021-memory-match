# Pokémon Memory Match

## Tabla de contenidos
* [Introducción](#Introducción)
* [Usuarios](#Usuarios)
* [Interfaz de usuario](#Interfaz-de-usuario)
* [Desarrollo del juego](#desarrollo-del-juego)

## Introducción 
Pokémon Memory Match es un juego de cartas basado en el popular juego *Memory Match*, conocido en español como *Memorice*, donde el jugador debe destapar un par de cartas a la vez y ver si coinciden o no. En caso de coincidir, las cartas quedan destapadas (match) y dan un puntaje, de lo contrario, se vuelven a voltear.
Este set de cartas está inspirado en la saga de juegos *Pokémon*.

## Usuario 
Esta aplicación está pensada para todo tipo de persona que quiera jugar, desde niños que entiendan el funcionamiento del juego, hasta personas de mayor edad que quieran pasar un rato agradable. 

En nuestra investigación de usuario, nos encontramos con que el jugador quiere un juego con una paleta de colores agradable y adecuada a la temática elegida (Pokemon estilo retro), conocer el número de movimientos, el puntaje (cuántas veces ha hecho match), tener un tiempo para que el desafío sea mayor, que las cartas queden volteadas automáticamente al hacer el match y que se volteen cuando no coincidan. Por último, al terminar el juego quiere tener otra oportunidad para volver a jugar. Se suma a lo anterior, el bloqueo de las cartas una vez acabado el tiempo.

## Interfaz de usuario

Se creó un prototipo de baja fidelidad con una lluvia de ideas de lo que podría ser el juego, para empezar a armar una aplicación con lo que quiere el usuario. 

En el primer prototipo se tuvo en consideración interfaz de inicio, posibles popups, posición de cartas y de estadísticas. 

![Prototipo baja fidelidad](https://i.ibb.co/82H6z1t/prototipo01.png "Prototipo baja fidelidad")

Luego se hizo un prototipo interactivo de alta fidelidad, donde los usuarios pudieron acceder al juego en etapa de testeo.

![prototipo alta fidelidad](https://i.ibb.co/LPwcnCS/boceto.png "prototipo alta fidelidad")


Cuando los usuarios interactuarion con el prototipo anterior dieron su feedback, el cuál se tomó en cuenta para mejoras en el prototipo final. 

![final](https://i.ibb.co/Fq7GjsP/Captura03.png "final")

## Desarrollo del juego 
Para el desarrollo de esta aplicación, utilizamos solo VanillaJS, además de dar forma y estilo con HTML & CSS. 

Se consideró lo que quería el usuario, por lo que se implementó el algoritmo de Fisher-Yates para barajar las cartas al azar, implementación de temporizador, contador de acierto y movimientos. Además, se implementó una función para bloquear las cartas al terminar el juego o cuando se acabe el tiempo.

Se puede acceder a esta aplicación mediante el siguiente link -poner link-

Este juego fue desarrollado por Daniela Baeza y Cata García para Laboratoria, cohort SCL021, Agosto 2022.
