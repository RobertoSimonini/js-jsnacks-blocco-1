console.log('OK JS');

/*
    !SNACK 1
    Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

// Creo la variabile per eseguire la somma 

let sum = 0;

for (let i = 1; i <= 10; i++) {
// Creo la variabile per chidere il numero 10 volte all'utente 
let userNumber = parseInt(prompt('Inserisci un numero'));

// Sommo i numeri dell'utente 
sum += userNumber;
console.log(userNumber);
};

// Stampo il risulato in console
console.log('il Totale è ' + sum);
