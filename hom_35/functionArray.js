class MyArray {
    constructor(array) {
        this.array = array;
    }
    reduce(f) {
        let result = this.array[0]
        for (let i = 1; i < this.array.length; ++i) {
            result = f(result, this.array[i])
        }
        return result
    }
    map(f) {
        const lst = [];
        for (let i of this.array) {
            lst.push(f(i));
        }
        return lst
    }
    filter(f) {
        let result = [];
        for (let l of this.array) {
            if (f(l)) {
                result.push(l);
            }
        }
        return result
    }
}


const my = new MyArray([1, 2, 3, 4, 5, 19])
/*
function add(a, b) 
    return a + b;}
console.log(my.reduce(add))
*/

/*
function square(a) {
    return a**2}
console.log(my.map(square))
*/

/*
function f(n) { return n > 18 }
console.log(my.filter(f))
*/