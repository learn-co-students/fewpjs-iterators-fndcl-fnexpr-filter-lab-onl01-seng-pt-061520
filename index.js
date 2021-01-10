// Code your solution here

function findMatching(drivers, string) {
   const matching = drivers.filter(driver => driver.toLowerCase() == string.toLowerCase())
   return matching 
}

function fuzzyMatch(drivers, string) {
   const matching = drivers.filter(match => match.toLowerCase().indexOf(string.toLowerCase()) === 0)
   return matching
}

function matchName(drivers, string){
   const matching = drivers.filter(match => match.name.toLowerCase() === string.toLowerCase())
   return matching 
}