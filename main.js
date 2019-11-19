// Ciclo che stampa i numeri da 1 a 100 scrivendo Fizz se è multiplo di 3, Buzz se è multiplo di 5 e FizzBuzz se è multiplo di entrambi


// Versione base
for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log(i);
    } else {
        console.log(i);
    }
}
