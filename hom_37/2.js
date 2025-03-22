function main() {
    console.log("A");
    setTimeout(function exec() { console.log("B") })
    runWhileLoopForNSeconds(3);
    console.log("C")
}
main();
function runWhileLoopForNSeconds(sec) {
    let start = Date.now(), now = start;
    while (now - start < (sec * 1000)) {
         now = Date.now(); 
    }
}
