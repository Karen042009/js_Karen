function* my_range(...a) {
    let start, stop, step;
    if (a.length === 1) {
        stop = a[0];
        start = 0;
        step = 1;
    } else if (a.length === 2) {
        [start, stop] = a;
        step = 1;
    } else { [start, stop, step] = a; }
    while (start < stop) {
        yield start;
        start += step;
    }
}
for (let num of my_range(1, 10, 2)) {
    console.log(num);
}