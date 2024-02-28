function elipse(a,b){
    const per = (Math.PI*(1.5*(a+b)-Math.sqrt(a*b))).toFixed(1)
    const sq = (Math.PI*a*b).toFixed(1)
    return `Area: ${sq}, perimeter: ${per}`
}
console.log(elipse(5,2)) //"Area: 31.4, perimeter: 23.1"
