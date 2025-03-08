const prompt = require("prompt-sync")();
function quantity(text) {
    const v = "AaEeIioOUuYy";
    const c = "BbCcDdFfjJKkLlMmNnPpQqRrSsTtVvWwXxZz";
    let v_q = 0;
    let c_q = 0;

    for (let symbol of text) {
        if (v.includes(symbol)) {
            v_q++;
        }
        if (c.includes(symbol)) {
            c_q++;
        }
    }

    return `${v_q}  ${c_q}`;
}

console.log(quantity(prompt()))