function some(arr, callback){
    for (var i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr)){
            return false;               
        }
    }
    return true;
}

console.log(some([1, 2, 3], function(value){
    return value < 4;
}));