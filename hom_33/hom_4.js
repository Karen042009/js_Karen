const f_while = (n) => {
    let a = 1
    let answer = 1
    while (a != n) {
        a++;
        if (a % 2 == 0) {
            continue
        };
        answer += a;
    }
    alert(answer)
}

const f_for = (n) => {
    let answer = 1
    for (let a = 1; a !=(n+1); a++) {
        if (a % 2 == 0) {
            continue
        };
        answer += a
        console.log(a)
    }
    alert(answer)}

f_while(Number(prompt()))
f_for(Number(prompt()))