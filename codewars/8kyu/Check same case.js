function sameCase(a, b){
    const lowLetters = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
    const upLetters = lowLetters.toUpperCase()
    if (lowLetters.includes(a) && lowLetters.includes(b)) return 1
    if (upLetters.includes(a) && upLetters.includes(b)) return 1
    if (lowLetters.includes(a) && upLetters.includes(b)) return 0
    if (lowLetters.includes(b) && upLetters.includes(a)) return 0
    return -1
}
console.log(sameCase('C', 'B')) // 1
console.log(sameCase('b', 'a')) // 1
console.log(sameCase('d', 'd')) // 1
console.log(sameCase('A', 's')) // 0
console.log(sameCase('c', 'B')) // 0
console.log(sameCase('b', 'Z')) // 0
console.log(sameCase('\t', 'Z')) // -1
console.log(sameCase('H', ':')) // -1
console.log(sameCase('b', ',')) // -1
