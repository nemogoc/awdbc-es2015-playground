//reimplementation of filter
function filter(arr, callback){
    var resultArr = [];
    for(var i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){ //I originally only passed arr[i] here, but it should be this
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

//use of filter (minus console.log)
console.log(filter([1, 2, 3], function(value){
    return value > 2;
}));
