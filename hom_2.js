function reverse_umber_while(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return rev;
}
function reverse_umber_for(n) {
    let rev = 0;
    for (n; n > 0;) {
        rev = rev * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    };
    return rev;
}

alert(reverse_umber_while(Number(prompt())))
alert(reverse_umber_for(Number(prompt())))