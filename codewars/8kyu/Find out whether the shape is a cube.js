
function cubeChecker(volume, side){
    return volume > 0 && side > 0 && (Math.pow(side, 3) === volume);
}
console.log(cubeChecker(  8, 3)) // false
console.log(cubeChecker(  8, 2)) // true
console.log(cubeChecker( -8,-2)) // false
console.log(cubeChecker(  0, 0)) // false
console.log(cubeChecker(  1, 5)) // false
console.log(cubeChecker(125, 5)) // true
