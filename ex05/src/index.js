// only change code below this line
class Microsoft {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    occupation() {
        return `${this._name} is a philanthropist!`;
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    studentAge() {
        return `${this.name} is ${this.age}`;
    }
}
let henry = new Microsoft("William Henry Gates III");
henry.occupation();
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zukenberg", 23);
elliot.occupation();
console.log(elliot.occupation());
elliot.studentAge();
console.log(elliot.studentAge());

// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}