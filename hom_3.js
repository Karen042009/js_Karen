function number_7_while(n) {
    let a = 1
    while (a != n + 1) {
        alert(a * 7); a++;
    }
}
function number_7_for(n) {
    let a = 1
    for (a; a != n + 1; a++) { alert(a * 7) }
}
number_7_while(Number(prompt()))
number_7_for(Number(prompt()))