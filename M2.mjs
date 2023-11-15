let fibonacci = new Array(0, 1);
for (let i = 1; i < 9; i++) {
    let getal = fibonacci[i] + fibonacci[i - 1];
    fibonacci.push(getal);
}
//to check if all numbers are in the list
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}