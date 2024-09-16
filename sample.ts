// Typescript
const foo = (a: number, b: number): number => {
  return a * b;
};

foo(0, 2);

interface Person {
  name: string;
  age: number;
}

export const users: Person[] = [
  {
    name: 'John',
    age: 20,
  },
];

// clases de ES6 (2005)

class User {
  // public name: string;

  constructor(
    private _name: string,
    public readonly age: number,
  ) {
    // this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  greeting() {
    return `Hola soy ${this._name}`;
  }
}

const user1 = new User('Pepe', 20);

console.log(user1); // { age: 20, name: 'Pepe' }
user1.greeting(); // Hola soy Pepe

user1.name = 'Juan';
console.log(user1.name); // Juan

export class Admin extends User {
  private role = 'Admin';

  constructor(name: string, age: number) {
    super(name, age);
  }

  override greeting() {
    return super.greeting() + ` y soy ${this.role}`;
  }
}

// Strings ES5 (2009)

export const cadena1 = 'Hola Mundo';
export const cadena2 = `Hola Mundo, ${user1.name}`;
