// Code your solution here
function findMatching(drivers, target) {
    return drivers.filter(s => {return s.toLowerCase() === target.toLowerCase()})
  }
  
  function fuzzyMatch(drivers, target) {
    return drivers.filter(s => {return s.startsWith(target)})
  }
  
  function matchName(drivers, target) {
    return drivers.filter(s => {
      return s.name === target
    })
  }