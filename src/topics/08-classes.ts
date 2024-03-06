export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private address: string = "No address"
  ) {}
}

// Inheritance
// export class Hero extends Person {
//   constructor(
//     public afterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

// Compision
export class Hero {
  // public person: Person;

  constructor(
    public afterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    //this.person = new Person(realName);
  }
}

const person = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", person);

console.log(ironman);
