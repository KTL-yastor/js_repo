function palindrom(str){
    return str == str.split('').reverse().join('');
}

console.log(palindrom('kajak'));