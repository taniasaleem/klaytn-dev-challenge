
export function multipleOfNums(num, multiple) { return (multiple.filter(m => m && num % m === 0).length); }
export function findMultiple(limit, multiple = [3, 5]) {
    const multiples = [];
    for (let i = 1; i < limit; i++) {
        if (multipleOfNums(i,multiple)) {
            multiples.push(i);
        }
    }
    return multiples;
}
export function findSumOfArray(arr){
    return arr.reduce((a, b) => a + b, 0)
}