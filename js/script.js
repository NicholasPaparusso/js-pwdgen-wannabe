//Definiamo le Variabili
let genPsw;
const firstname = prompt('Inserire nome');
const lastName = prompt('Inserire cognome');
const date = "22"
const favColor = prompt('Inserire colore preferito');
// Attribuiamo alla variabile "genPsw un valore o in questo caso una serie di valori determinati dalle altre variabili"
genPsw = `
  Password Suggerita: <span class="psw-style">${firstname}${lastName}${date}${favColor}</span>
  `;
// Sovrascriviamo all'interno dello span con ID:"password-generator" , inserendo come contenuto "genPsw"
document.getElementById('password-generator').innerHTML += genPsw;