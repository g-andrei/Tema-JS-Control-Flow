// Fn = (Fn-1) + (Fn-2)

var result= [];
result[0] = 0;
result[1] = 1;

for(var i = 2; i < 20; i++) {
    result[i] = result[i-1] + result[i-2];
}

console.log(result);