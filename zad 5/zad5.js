function fibbonaci(n){
    return Array.from({length: n}, (_, i) => i).reduce((acc, curr) => {
        if (curr === 0 || curr === 1){
            acc.push(curr);
        } else {
            acc.push(acc[curr-1] + acc[curr-2]);
        }
        return acc;
    }
    , []);
}

console.log(fibbonaci(9));
