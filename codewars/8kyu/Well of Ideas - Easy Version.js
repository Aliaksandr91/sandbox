function well(x){
    let goodCount = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            goodCount+=1
        }
    }
    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
console.log(well(['bad', 'bad', 'bad']))// 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))// 'Publish!'
console.log(well(["bad","bad","bad","bad","bad","bad","bad","bad","bad","bad","good","bad","bad","good","bad"]))// 'Publish'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))// 'I smell a series!'

