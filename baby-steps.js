const sum = (a, b, c) => {
  var result = 0;
  for (let i = 2; i < process.argv.length; i++) {
    result += +process.argv[i];
  }
  return result;
};
console.log(sum(+process.argv[2], +process.argv[3], +process.argv[4]));
