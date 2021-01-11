// Code your solution here

// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
const findMatching = (array, string) => {
    return array.filter(x => x.toLowerCase() === string.toLowerCase())
  }

  //Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
   const fuzzyMatch = (array, string) => {
    return array.filter(x => x.slice(0, string.length) === string)
  }
//Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
   const matchName = (array, string) => {
    return array.filter(x => x.name === string)
  }