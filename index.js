// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(dr => {
        return dr.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(dr => {
        return dr.slice(0, string.length).toLowerCase() == string.toLowerCase()
    })
}

function matchName(drivers, string) {
    return drivers.filter(dr => {
        return dr.name == string
    })
}