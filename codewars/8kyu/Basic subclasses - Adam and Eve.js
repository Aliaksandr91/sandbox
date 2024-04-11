class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I am a ${this.gender}.`);
    }
}

class Man extends Human {
    constructor(name) {
        super(name, 'man');
    }
}

class Woman extends Human {
    constructor(name) {
        super(name, 'woman');
    }
}

class God {
    static create() {
        const adam = new Man('Adam');
        const eve = new Woman('Eve');
        return [adam, eve];
    }
}
