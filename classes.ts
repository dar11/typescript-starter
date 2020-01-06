interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function greetMe(student: Person) {
  console.log('Hello ' + student.firstName + ' ' + student.lastName);
}

let daniel: Person = {firstName: "Daniel", lastName: "Arnsberger"};

greetMe(daniel);

class Student {
  public firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  signUp() {
    console.log('Signed up ' + this.firstName + ' ' + this.lastName);
  }

}

let rico = new Student('Rico', 'Luedeke');
rico.signUp();