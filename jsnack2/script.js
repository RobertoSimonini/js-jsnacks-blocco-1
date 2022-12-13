//// console.log ('Prova Jsnack 2');

/* 
    !SNACK 2 
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.
    comunicagli se può partecipare o no alla festa.
*/

// preparo l'array con i nomi dei partecipanti invitati 
const allowedPeople = ['Pippo', 'Roberto', 'Claudio', 'Ciccio'];

// Prendo dal Dom l'input e il bottone 
const nameElement = document.getElementById('username');
const getInBtn = document.getElementById('get-in');
