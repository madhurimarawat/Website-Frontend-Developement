// Define a class called "Person"
class Person {
	
  // The constructor function is called when a new instance of the class is created
  // It initializes the object's properties
  constructor(firstName, lastName, age) {
	  
    // "this" refers to the instance being created
    this.firstName = firstName; // Store the first name
    this.lastName = lastName;   // Store the last name
    this.age = age;             // Store the age
  }

  // Define a method to get the full name of the person
  getFullName() {
    // Use the properties stored in the instance to construct the full name
    return `${this.firstName} ${this.lastName}`;
  }

  // Define a method to check if the person is an adult (age >= 18)
  isAdult() {
    return this.age >= 18;
  }

  // Define a method to greet the person
  greet() {
    // Use the getFullName() method to get the full name and greet the person
    console.log(`Hello, ${this.getFullName()}!`);
  }
}


// Create instances of the Person class
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 16);

// Call methods on the instances

console.log(person1.getFullName()); // Output: "John Doe"
console.log(person2.isAdult());     // Output: false
person1.greet();                   // Output: "Hello, John Doe!"
person2.greet();                   // Output: "Hello, Jane Smith!"
