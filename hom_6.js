function f_for(row, col) {
    let str_ = "*".repeat(col) + "\n"
    for (row - 2; row != 0; --row) { str_ += "*" + " ".repeat(col - 2) + "*" + "\n" }
    str_ += "*".repeat(col)
    alert(str_)
}
function f_while(row, col) {
    let str_ = "*".repeat(col) + "\n"
    let a = row - 2
    while (a != 0) {
        a--;
        str_ += "*" + " ".repeat(col - 2) + "*" + "\n";
    }
    str_ += "*".repeat(col)
    alert(str_)
}
let row = Number(prompt())
let col = Number(prompt())
f_while(row, col)