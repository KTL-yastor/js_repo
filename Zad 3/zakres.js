function range(a,b){
    return Array.from({length: b-a+1}, (_, i) => a + i);
    // let array = [];
    // for (let i = a; i <= b; i++){
    //     array.push(i);
    // }
    // return array;
}

console.log(range(1,10));