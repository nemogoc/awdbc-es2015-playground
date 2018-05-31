function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

forEach([1,2,3], function(number){
     console.log(number * 2);
});