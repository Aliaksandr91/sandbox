function findMultiples(integer, limit) {
    //your code here
    let arr = [];
    let temp = integer;
    while (temp <= limit) {
      arr.push(temp)
      temp += integer
    }
    return arr
  }