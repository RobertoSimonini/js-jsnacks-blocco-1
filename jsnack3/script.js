////console.log('OK JS');

/*
    !SNACK BONUS
    L'utente inserisce un numero di 4 cifre in un input. Calcola la somma di tutte le cifre che compongono il numero e stampala in pagina.

    ?Esempio: l'utente inserisce 1234, noi stampiamo 10.
*/

// Prendo l'imput e il bottone per eseguire la somma dal DOM
const userNumber = document.getElementById('userNumber');
const btnSum = document.getElementById('btn-sum');

// Aggiungo l'event listener al bottone per eseguire la somma 
btnSum.addEventListener ('click', function(){

// Prendo il value dell'input 
 const userNumberValue = userNumber.value;

// ! Verifica 

if ((!userNumberValue) || isNaN(userNumberValue)) {
    alert('Inserisci valori validi');
}



});