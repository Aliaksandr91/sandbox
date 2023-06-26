function sumMul(n,m){
//your idea here
    let r = 0;
    for ( let i = 1; i * n < m; i++){
        r = r + i * n
    }
    return r > 0 ? r : 'INVALID'
}