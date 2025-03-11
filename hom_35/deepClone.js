function deepClone(obj) {
    let copy = {}
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = obj[key];

        if (value !== null && typeof value === 'object')
            { copy[key] = deepClone(value); } 
        else { copy[key] = value; }
    }
    return copy;
}
let a = { name: { k: { b: "y" } }, age: 30 };
let clone = deepClone(a);
clone.name.k.b = 1;
console.log(a);