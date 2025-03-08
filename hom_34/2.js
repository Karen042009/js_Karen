const prompt = require("prompt-sync")();
function my_bin(n) {
    if (n === 0) {
        return '0'
    }
    let bin = ''
    while (n > 0) {
        bin = (n % 2) + bin
        n = Math.floor(n / 2)
    }
    return bin
}
let n = Number(prompt())
console.log(my_bin(n))