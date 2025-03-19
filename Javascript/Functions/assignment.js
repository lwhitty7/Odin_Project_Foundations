function add7(x){
    return x + 7;
}

console.log(add7(3));

function multiply(x,y){
    return x * y;
}

console.log(multiply(3,10));

// Exists to first convert the string to all lowercase characters and then captialize
function capitalize(s){
    new_s = s.toLowerCase();
    return new_s.charAt(0).toUpperCase() + new_s.slice(1);
}

console.log(capitalize("heAlth asdasdub ASD"));

function lastLetter(l){
    return l.slice(-1);
}

console.log(lastLetter("te"));