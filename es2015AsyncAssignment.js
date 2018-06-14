
async function getMostFollowers(...users) { 
    let promises = users.map(user => getOneUser(user));
    let userList = await Promise.all(promises)
    let max = userList.sort((a,b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`;
}

function getOneUser(username){
    return $.getJSON(`https://api.github.com/users/${username}`);
}

// getMostFollowers("colt", "nemo").then(data => console.log(data));


async function starWarsString(id){
    let str = ""
    let person = await $.getJSON(`https://swapi.co/api/people/${id}`)
    str = person.name; 
    let film = await $.getJSON(person.films[0])
    return `${str} is featured in ${film.title} directed by ${film.director}`;
}

// starWarsString(1).then(data => console.log(data));