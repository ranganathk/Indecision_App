class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ! I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name , age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += ` And I am from ${this.location}.`;
    }
    return greeting;
  }
}

const me = new Traveller('Ranga', 27, 'Hyderabad');
console.log(me.getGreeting());
console.log(me.getDescription());
const you = new Traveller('Abc', 30);
console.log(you.getGreeting());
console.log(you.getDescription());
const him = new Traveller(null, null, 'Chennai');
console.log(him.getGreeting());
console.log(him.getDescription());
