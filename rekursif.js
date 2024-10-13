function powerRecursive(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / powerRecursive(x, -n);
    }
    return x * powerRecursive(x, n - 1);
}

let x = 2;
let n = 5;
console.log(`${x}^${n} = ${powerRecursive(x, n)}`);

