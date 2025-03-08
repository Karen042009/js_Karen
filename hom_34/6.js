const prompt = require("prompt-sync")();
function revers(n) {
    let r = 0;
    while (n > 0) {
        rr = n % 10;
        r = r * 10 + rr;
        n = Math.floor(n / 10);
    }
    return r
}
console.log(revers(Number(prompt())))