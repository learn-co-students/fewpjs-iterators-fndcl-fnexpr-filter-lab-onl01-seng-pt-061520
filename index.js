// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function (possibleMatch){ 
        const length = string.length
        return possibleMatch.slice(0,length) === string
    })
}

function matchName(drivers, string){
    return drivers.filter(possibleMatch => possibleMatch.name === string)
}