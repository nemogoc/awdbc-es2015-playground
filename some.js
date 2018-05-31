function some(arr, callback){
    for (var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;               
        }
    }
    return false;
}

console.log(some([1, 2, 3], function(value){
    return value < 2;
}));