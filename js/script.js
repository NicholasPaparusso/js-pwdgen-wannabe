//Definiamo le Variabili
let pswGen;
const firstname = prompt('Inserire nome');
const lastName = prompt('Inserire cognome');
const age = prompt('Inserire età');
const favColor = prompt('Inserire colore preferito');
pswGen `
  Password Suggerita : <span class="psw-style"> ${firstname}${lastName}${age}${favColor}  </span>
`;

document.getElementById('psw').innerHTML += pswGen ;