function narcissistic(value) {
    let str = value.toString()
    let res = str.split('').map((num)=>num**str.length).reduce((acc,el)=>acc+el,0)
    return res === value
}

console.log(narcissistic(153))