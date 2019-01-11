var apple = process.argv[2]
var banana = apple.split('')
function obfuscate(banana) {
  for(i= 0; i < banana.length; i++) {
    if( banana[i] === 'a') {
      banana.splice([i], 1, '4')
    }
    else if (banana[i] === 'e') {
      banana.splice([i], 1, '3')
    } else if (banana[i] === 'o') {
      banana.splice([i], 1, '0')
    } else if (banana[i] === 'l') {
      banana.splice([i], 1, '1')
    }
  }
  return banana.join('')
}
var pear = obfuscate(banana);
console.log(pear);