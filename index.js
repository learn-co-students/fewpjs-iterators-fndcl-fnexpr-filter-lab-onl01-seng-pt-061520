// Code your solution here
function findMatching(drivers, string) {
    const newDrivers = drivers.filter(name => {
      return name.toLowerCase() === string.toLowerCase();
    })
    return newDrivers
  }
  
  function fuzzyMatch(drivers, string) {
    const newDrivers = drivers.filter(name => {
      return name.startsWith(string)
    });
    return newDrivers;
  }
  
  function matchName(drivers, string) {
    const newDrivers = drivers.filter(name => {
      return name.name === string
    });
    return newDrivers
  }