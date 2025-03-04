let row = prompt()
const col = prompt()
let str_ = ""
const f_for = () => { for (row; row != 0; --row) { str_ += "*".repeat(col) + "\n" } }
const f_while = () => { while (row != 0) { --row; str_ += "*".repeat(col) + "\n" } }
f_while()
alert(str_)