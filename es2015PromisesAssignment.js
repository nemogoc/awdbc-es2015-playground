//he didn't use async/await
async function getMostFollowers(...args) { 
    //instead of following 2 lines, use map: let promises = args.map(username => $.getJSON(baseUrl + username))
    let promises = [];
    args.forEach(arg => promises.push(getOneUser(arg)));
    
    //he didn't use await, instead he did: return Promise.all(promises).then(function(data) {
        //let max = data.sort((a,b) => a.followers < b.followers)[0];
        //puts return here, so to use it, need to console.log the return val.
    //})
    let userList = await Promise.all(promises);
    let highest = determineHighestFollowers(userList);

    return `${highest.login} has the most followers with ${highest.followers}`
    //https://developer.github.com/v3/users/#get-a-single-user
    //https://api.github.com/users/nemogoc
}

function getOneUser(username){
    return $.getJSON(`https://api.github.com/users/${username}`);
}

function determineHighestFollowers(userList){
    let highest = userList[0];
    for (let i = 0; i < userList.length; i++){
        if (userList[i].followers > highest.followers){
            highest = userList[i];
        }
    }
    return highest;
}

let fake = [
    {
        login: "Colt",
        followers: 1234
    },
    {
        login: "Elie",
        followers: 1235
    },
    {
        login: "Tim",
        followers: 0
    },
    {
        login: "nemo",
        followers: 1
    }
];

// let blank = [];
// console.log(determineHighestFollowers(fake));

// console.log(getMostFollowers("colt", "nemo"));


function starWarsString(id){
    let str = ""
    return $.getJSON(`https://swapi.co/api/people/${id}`)
    .then(user => {
        str = user.name; 
        return $.getJSON(user.films[0])
    }) 
    .then(film => `${str} is featured in ${film.title} directed by ${film.director}`);
}

starWarsString(1).then(data => console.log(data))
// starWarsString(2);