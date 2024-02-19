interface Person {
  name: string;
  age: number;
}

function talk(person: Person) {
  console.log(`my name is ${person.name}, I'm ${person.age} year old`);
}

let user = { name: 'simin', age: 12 };

talk(user);

let x: string[] = ['1', undefined, '3'];
