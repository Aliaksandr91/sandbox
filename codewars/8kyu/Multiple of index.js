function multipleOfIndex(array) {
    let arr = [];
    array.forEach((element, index) => {
      if (index > 0 && element%index == 0) {
        arr.push(element)
      }
    });
    return arr
  }