// Ciclo che stampa i numeri da 1 a 100 scrivendo Fizz se è multiplo di 3, Buzz se è multiplo di 5 e FizzBuzz se è multiplo di entrambi


// Versione base
for (var i = 1; i <= 100; i++) {
    /* variante per multipli di 3 e di 5 contemporaneamente
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } */
    if ((i % 3 == 0) && (i % 5 == 0)){ // Se è multiplo di 3 e di 5
        console.log('FizzBuzz');
    } else if (i % 3 == 0) { // Se è multiplo di 3
        console.log('Fizz');
    } else if (i % 5 === 0) { // Se  è multiplo di 5
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


/*
// Versione super avanzata
for(let i=0;i<100;)
  console.log(
    ( ++i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i
  )
*/
