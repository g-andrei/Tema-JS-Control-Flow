var numarulDeElemente = prompt("La cate numere doriti sa calculati media aritmetica?");
var arr = [];
var suma = 0;


while(numarulDeElemente === null || numarulDeElemente === "") {
    alert("Trebuie sa introduceti valorile dorite!");
    numarulDeElemente = prompt("La cate numere doriti sa calculati media aritmetica?");
}

for (var i = 1; i <= numarulDeElemente; i++) {
    arr.push(Number(prompt("Introduceti un numar.")));
}

for( var i = 0; i < arr.length; i++) {
    suma += arr[i];
}

console.log(`Ati calculat media aritmetica pentru ${numarulDeElemente} numere.`);
console.log(`Numerele din sir sunt ${arr}.`);
console.log(`Media aritmetica este ${suma/arr.length}.`);
alert("Vedeti rezultatul in consola!");