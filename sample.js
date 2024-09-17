class User {
  #name;
  age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  // get name() {
  //   return this.#name;
  // }

  // set name(value) {
  //   this.#name = value;
  // }

  greeting() {
    return `Hola soy ${this._name}`;
  }
}

const u = new User("Pepe", 33);
console.log(u.greeting());
