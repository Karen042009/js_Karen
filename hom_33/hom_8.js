function f_for(row) {
    let str_ = "";
    for (let i = 0; i < row; i++) {
        str_ += " ".repeat(row - i - 1) + "*".repeat(i + 1) + "\n";
    }
    alert(str_)
}

let row = Number(prompt())
f_for(row)