function map(arr, callback) {
    var results = [];
    for (var i = 0; i < arr.length; i++){
        results.push(callback(arr[i], i, arr));
    }
    return results;
}

console.log(map([1,2,3], function(number){
     return number * 2;
}));