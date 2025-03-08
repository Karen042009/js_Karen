const prompt = require("prompt-sync")();
function triangle(n) {
    let t = [];
    for (let i = 0; i < n; i++) {
        t[i] = [];
        for (let j = 0; j <= i; j++) {
            t[i][j] = 1;}}
    for (let i = 2; i < n; i++) {
        for (let j = 1; j < i; j++) {
            t[i][j] = t[i - 1][j - 1] + t[i - 1][j];}}
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - t[i].length) + t[i].join(" "));}}
let n = triangle(Number(prompt()))