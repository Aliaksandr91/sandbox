function setAlarm(employed, vacation){
    return !vacation && employed
}
console.log(setAlarm(true, true)) // false
console.log(setAlarm(false,true)) // false
console.log(setAlarm(true, false)) // true