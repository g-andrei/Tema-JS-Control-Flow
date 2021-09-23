var arr = [true, 21, "Andrei", null, 51, "JS", -5, undefined, 6];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {
        sum += arr[i];
    }
}

console.log(`Array-ul este: ${arr}`);
console.log(`Suma tuturor numerelor din Array este: ${sum}`);