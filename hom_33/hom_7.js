function f_for(row) {
    let str_ = "";
    let a = 1;
    for (let i = 0; i < row; i++, a++) {
        str_ += "*".repeat(a) + "\n";
    }
    alert(str_);
}

let row = Number(prompt());
f_for(row);
