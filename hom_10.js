function f_for(row,col) {
    let str_ = "";
    let a = 0;
    for (row;row!=0;--row,--col,++a) {
        str_ += " ".repeat(a)+"*".repeat(col) + "\n";
    }
    alert(str_);
}

let row = Number(prompt());
let col = Number(prompt());
f_for(row,col);
