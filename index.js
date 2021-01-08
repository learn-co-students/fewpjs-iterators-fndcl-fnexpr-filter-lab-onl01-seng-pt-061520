// Code your solution here
function findMatching(drivers, stringOne){
    let matching = drivers.filter(n => {
        return n.toLowerCase() === stringOne.toLowerCase();
      });
      return matching
}

function fuzzyMatch(drivers, stringOne){
    let matching = drivers.filter(n => {
        return n.startsWith(stringOne);
      });
      return matching
    }

function matchName(drivers, stringOne){
    let matching = drivers.filter(n => {
        return n.name.toLowerCase()
        === stringOne.toLowerCase();
      });
      return matching
    }

