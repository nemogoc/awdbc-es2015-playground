// returns the first element in the array for which the callback returns a truthy value, or -1 if none

function findIndex(arr, callback) {
    for(var i = 0; i < arr.length; i++){
        console.log(i);
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}

var a1 = [3, 4, 6, 2, 1, 6];
console.log(findIndex(a1, function(num, index, array){
    return num === 6;
}));

var a2 = [5, 11, 13, 8, 6, 7];
console.log(findIndex(a2, function(num, index, array) {
    return num % 2 === 0;
}));

var a3 = [3, 4, 6, 2, 1, 6];
console.log(findIndex(a3, function(num, index, array){
    return num === 7;
}));

var a4 = [3, 4, 6, 7, 2, 1, 6, 7];
console.log(findIndex(a4, function(num, index, array){
    num === 7;
}));