const prompt = require("prompt-sync")(); 
function my_abs(num) {
    return Number(-num)
}
console.log(my_abs(prompt()))