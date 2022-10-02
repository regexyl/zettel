function getSetBits(value) {
  let setBitCount = 0;
  while (value !== 0) {
    if (value & 1 === 1) setBitCount++;
    value = value >> 1;
  }
  return setBitCount;
}

console.log('3: ' + getSetBits(3))
console.log('4: ' + getSetBits(4))
console.log('5: ' + getSetBits(5))
console.log('6: ' + getSetBits(6))
console.log('7: ' + getSetBits(7))
console.log('8: ' + getSetBits(8))
console.log('9: ' + getSetBits(9))
console.log('10: ' + getSetBits(10))