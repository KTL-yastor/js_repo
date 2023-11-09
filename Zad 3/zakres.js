function range(a,b){
   
    let array = [];
    for (let i = a; i <= b; i++){
        array.push(i);
    }
    return array;
}

console.log(range(1,10));