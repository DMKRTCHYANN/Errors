function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
}

console.log(isPositive(5));
console.log(isPositive(0));
console.log(isPositive(-3));
