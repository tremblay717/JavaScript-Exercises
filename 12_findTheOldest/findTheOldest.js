const findTheOldest = function (people) {

    for (let i = 0; i < people.length; i++) {

        if (Object.keys(people[i]).indexOf('yearOfDeath') == 2) {
            people[i]['age'] = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            let year = new Date().getFullYear();
            people[i]['age'] = year - people[i].yearOfBirth;
        }
    }

    const age = people.sort((a, b) => {
        return b['age'] - a['age'];
    });

    return age[0];

};

// Do not edit below this line
module.exports = findTheOldest;