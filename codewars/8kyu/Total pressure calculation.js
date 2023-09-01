const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const R = 0.082;
    const tempKelvin = temp + 273.15;
    const P_total = (givenMass1 / molarMass1 + givenMass2 / molarMass2) * (R * tempKelvin) / volume;
    return P_total;
}

console.log(solution(44, 30, 3, 2, 5, 50)) //0.7146511212121212);
console.log(solution(60, 20, 10, 30, 10, 100)) //5.099716666666667);
