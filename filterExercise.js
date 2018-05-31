/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
*/
    console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))
     // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
// */

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined; //I didn't have !== undefined, which passed the tests, but would allow any falsy value through
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value 
as the second parameter or undefined if the value is not found in the array.

Examples:
*/
    console.log(find([1,2,3,4,5], 3)) // 3
    console.log(find([1,2,3,4,5], 10)) // undefined
// */

function find(arr, searchValue){
    var results = arr.filter(function(value){
        return value === searchValue;
    }); //[0] here
    //he replaced this whole second part with a [0] above. arr[0] is undefined if empty array
    if (results.length){
        return results[0];
    }
    return undefined;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
*/
    console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true},
     {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}],
      'isCatOwner',true) )
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
// */

function findInObj(arr, key, searchValue){
    return arr.filter(function(value){
        return value[key] === searchValue;
    })[0]
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed.
 Every character in the new string should be lowercased.

Examples:
*/
    console.log(removeVowels('Elie')) // ('l')
    console.log(removeVowels('TIM')) // ('tm')
    console.log(removeVowels('ZZZZZZ')) // ('zzzzzz')
// */

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(letter){
        return vowels.indexOf(letter) === -1;
    }).join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
(HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
*/
    console.log(doubleOddNumbers([1,2,3,4,5])) // [2,6,10]
    console.log(doubleOddNumbers([4,4,4,4,4])) // []
// */

function doubleOddNumbers(arr){
    var odds = arr.filter(function(val){
        return val % 2 !== 0;
    })//can just do .map and the rest here, instead of saving to a var
    
    return odds.map(function(val){
        return val * 2;
    });
}