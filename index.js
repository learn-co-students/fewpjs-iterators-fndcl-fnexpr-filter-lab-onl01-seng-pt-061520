// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string){
    return drivers.filter(d => {
        return d.startsWith(string)
    })
}   

function matchName(drivers, string){
    return drivers.filter(d => {
        return d.name === string
    })
}