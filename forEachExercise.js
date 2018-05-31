/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
*/
console.log("double Values")
    console.log(doubleValues([1,2,3])) // [2,4,6]
    console.log(doubleValues([5,1,2,3,10])) // [10,2,4,6,20]


function doubleValues(arr){
    var doubledVals = [];
    arr.forEach(function(value){
        doubledVals.push(value * 2);
    });
    return doubledVals;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:*/
console.log("onlyEvenValues")
    console.log(onlyEvenValues([1,2,3])) // [2]
    console.log(onlyEvenValues([5,1,2,3,10])) // [2,10]


function onlyEvenValues(arr){
    var evenVals = [];
    arr.forEach(function(value){
       if(value % 2 === 0){
           evenVals.push(value);
       } 
    });
    return evenVals;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:*/
console.log("showFirstAndLast");
    console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])) // ["ct", "mt", "tm", "uy"]
    console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']


function showFirstAndLast(arr){
    var firstAndLast = [];
    arr.forEach(function(value){
       firstAndLast.push(value.substring(0,1) + value.substring(value.length -1));
    });
    return firstAndLast;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:*/
console.log("addKeyAndValue")
    console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') )
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]


function addKeyAndValue(arr,key,value){
    var dict = [];
    arr.forEach(function(thisObj){
        thisObj[key] = value
        dict.push(thisObj)
    })
    return dict;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples: */
console.log("vowelCount");
    console.log(vowelCount('Elie')) // {e:2,i:1};
    console.log(vowelCount('Tim') )// {i:1};
    console.log(vowelCount('Matt')) // {a:1})
    console.log(vowelCount('hmmm')) // {};
    console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};

function vowelCount(str){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var foundVowels = {};
    var lowerCaseStrArr = str.toLowerCase().split("");
    
    vowels.forEach(function(curVowel){
        var count = 0;
        lowerCaseStrArr.forEach(function(letter){
            if (curVowel === letter){
                foundVowels[curVowel] = ++count;
            }
        })
    });
   return foundVowels;
}

console.log("vowelCountSolution");
    console.log(vowelCountSolution('Elie')) // {e:2,i:1};
    console.log(vowelCountSolution('Tim') )// {i:1};
    console.log(vowelCountSolution('Matt')) // {a:1})
    console.log(vowelCountSolution('hmmm')) // {};
    console.log(vowelCountSolution('I Am awesome and so are you'))

//instructor's solution is O(n) not O(n^2)
function vowelCountSolution(str){
    //this works as a string too: var vowels = "aeiou";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var foundVowels = {};
    var lowerCaseStrArr = str.toLowerCase().split("");

    lowerCaseStrArr.forEach(function(letter){
        //if the letter is present in vowels
        if (vowels.indexOf(letter) !== -1){
            if(letter in foundVowels){
                foundVowels[letter]++;
            }
            else {
                foundVowels[letter] = 1;
            }
        }
    });
    return foundVowels;
}
