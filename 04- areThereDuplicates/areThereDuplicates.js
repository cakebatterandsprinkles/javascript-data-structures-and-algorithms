function areThereDuplicates1(...args) {
  // Create a frequeny counter object
  let frequencyCounter = {};
  for (let arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
  }

  // Loop over the counter object to see if there are any values > 0.
  for (let arg of args) {
    if (frequencyCounter[arg] > 1) {
      return true;
    }
  }

  return false;
}

function areThereDuplicates2(...args) {
  return new Set(args).size !== args.length;
}

module.exports = { areThereDuplicates1, areThereDuplicates2 };
