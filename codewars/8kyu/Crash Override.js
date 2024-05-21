const firstName  = {
    A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: 'Echo',
    F: 'Flux', G: 'Gamma', H: 'Hex', I: 'Icon', J: 'Java',
    K: 'Keystroke', L: 'Logic', M: 'Matrix', N: 'Neon', O: 'Omega',
    P: 'Photon', Q: 'Quantum', R: 'Radix', S: 'Specter', T: 'Tracer',
    U: 'Ultra', V: 'Vector', W: 'Whiz', X: 'Xeno', Y: 'Yield', Z: 'Zero'
}

const surname ={
    A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Dynamo', E: 'Echo',
        F: 'Flux', G: 'Glitch', H: 'Havoc', I: 'Interface', J: 'Jolt',
        K: 'Knight', L: 'Lightning', M: 'Malware', N: 'Ninja', O: 'Override',
        P: 'Phantom', Q: 'Quantum', R: 'Rogue', S: 'Shadow', T: 'Terror',
        U: 'Unicorn', V: 'Virus', W: 'Whisper', X: 'Xenon', Y: 'Yield', Z: 'Zero'
};
function aliasGen(fn, sn) {
    if (!/^[a-zA-Z]/.test(fn) || !/^[a-zA-Z]/.test(sn)) {
        return "Your name must start with a letter from A - Z.";
    }

    const firstInitial = fn[0].toUpperCase();
    const surnameInitial = sn[0].toUpperCase();

    const firstAlias = firstName[firstInitial];
    const surnameAlias = surname[surnameInitial];

    return `${firstAlias} ${surnameAlias}`;
}
console.log(aliasGen("Mike", "Millington"))// "Malware Mike"
console.log(aliasGen("Fahima", "Tash"))// "Function T-Rex"
console.log(aliasGen("Daisy", "Petrovic"))// "Data Payload"
console.log(aliasGen("7393424", "Anumbha"))// "Your name must start with a letter from A - Z."
console.log(aliasGen("Anuddanumbha", "23200"))// "Your name must start with a letter from A - Z."

