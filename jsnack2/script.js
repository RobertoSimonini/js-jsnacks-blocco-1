//// console.log ('Prova Jsnack 2');

/* 
    !SNACK 2 
    In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.
    comunicagli se può partecipare o no alla festa.
*/

// preparo l'array con i nomi dei partecipanti invitati 
const allowedPeople = ['Pippo', 'Roberto', 'Claudio', 'Ciccio'];

// Prendo dal Dom l'input, il messaggio e il bottone 
const nameElement = document.getElementById('username');
const getInBtn = document.getElementById('get-in');
const message = document.getElementById('message');



// Aggiungo l'Event listener al bottone 

getInBtn.addEventListener ('click', function(){
// Prendo il value dell'input 
nameValue = nameElement.value;

// !Verifica 
if (!nameValue) {
    message.innerText = 'Non hai inserito valori validi!'
    return;
};


// Controllo che il nome sia presente nella lista degli invitati
let isAllowed = false

for (let i = 0; i < allowedPeople.length; i++) {
    const currentName = allowedPeople[i];
    if (currentName === nameValue) {
        isAllowed = true;
    }
};

if (isAllowed) {
    message.innerText = 'Sei autorizzato ad accedere alla festa.'
} else {
    message.innerText = 'Non sei autorizzato ad accedere alla festa.'
};

   
});