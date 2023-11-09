
// seen aby nie wchodzic w nieskonczona petle

function isHappyNumber(x, seen = new Set()) {
    let sum = 0;
    let digits = x.toString().split("");
    digits.forEach((element) => {
        sum += parseInt(element) * parseInt(element);
    });
    if (sum == 1) {
        return true;
    } else if (seen.has(sum)) {
        return false;
    } else {
        seen.add(sum);
        return isHappyNumber(sum, seen);
    }
}

console.log(isHappyNumber(19));