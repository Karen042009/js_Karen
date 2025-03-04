function f_for(row,col) {
    let str_ = "";
    for (row;row!=0;--row,--col) {
        str_ += "*".repeat(col) + "\n";
    }
    alert(str_);
}

let row = Number(prompt());
let col = Number(prompt());
f_for(row,col);
