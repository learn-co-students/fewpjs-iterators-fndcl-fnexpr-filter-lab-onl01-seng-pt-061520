// Code your solution here
function findMatching(drivers, passedName) {
   return drivers.filter(n => {
       return n.toUpperCase() == passedName.toUpperCase();
   }) 
}

function fuzzyMatch(drivers, passedName) {
    return drivers.filter(n => {
        return n[0].toUpperCase() == passedName[0].toUpperCase();
    })
}

function matchName(drivers, passedName) {
    return drivers.filter(n => {
        return n["name"] == passedName;
    })
}