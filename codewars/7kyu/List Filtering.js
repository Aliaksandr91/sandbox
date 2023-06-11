function filter_list(l) {
    let arr = [];
    for (let item of l) {
      if (typeof item == "number") {
        arr.push(item)
      }
    }
    return arr;
  }