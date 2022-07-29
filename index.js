function findMatching(drivers, string) {
    let result = drivers.filter(n => {
        return n.toLowerCase() === string.toLowerCase()
    })
    return result
}

function fuzzyMatch(drivers, string) {
    let result = drivers.filter(n => {
        return n[0].toLowerCase() === string[0].toLowerCase()
    })
    return result
}

function matchName(drivers, string) {
    let result = drivers.filter(n => {
        return n['name'].toLowerCase() === string.toLowerCase()
    })
    return result
}