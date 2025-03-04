let rows = Number(prompt());
let i = 1;
str_=""
while (i <= rows) {
    let s = rows - i;
    let line = "";
    while (s > 0) {
        line += " ";
        s--;
    }
    let g = i;
    while (g > 0) {
        line += "* ";
        g--;
    }
    str_ += (line) + "\n";
    i++;
}
alert(str_)