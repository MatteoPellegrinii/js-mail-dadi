
let numberutente = Math.floor(Math.random() * 6) + 1;
console.log(numberutente);
document.getElementById("numeroutente").innerHTML = `il tuo numero è ${numberutente}`;

let numbercomputer = Math.floor(Math.random() * 6) + 1;
console.log(numbercomputer);
document.getElementById("numerocomputer").innerHTML = `il numero del computer è ${numbercomputer}`;

if (numbercomputer < numberutente) {
    document.getElementById("risultato").innerHTML = `HAI VINTO`;
} else if (numbercomputer == numberutente) {
    document.getElementById("risultato").innerHTML = `HAI PAREGGIATO`;
} else {
    document.getElementById("risultato").innerHTML = `HAI PERSO`;
}

