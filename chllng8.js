// Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  // Example usage:
  // console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
  
  // Function to filter people over 30 years old
  function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
  }
  
  // Example usage:
  // const people = [
  //   { name: "Alice", age: 25, email: "alice@example.com" },
  //   { name: "Bob", age: 35, email: "bob@example.com" },
  //   { name: "Charlie", age: 32, email: "charlie@example.com" }
  // ];
  // console.log(filterPeopleOver30(people));
  
  // Stack implementation using an array
  class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.stack.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty");
      }
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Example usage:
  // const stack = new Stack();
  // stack.push(1);
  // stack.push(2);
  // console.log(stack.pop()); // 2
  // console.log(stack.peek()); // 1
  
  // Queue implementation using an array
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.queue.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage:
  // const queue = new Queue();
  // queue.enqueue(1);
  // queue.enqueue(2);
  // console.log(queue.dequeue()); // 1
  // console.log(queue.peek()); // 2
  
  // Function to remove vowels from a string
  function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }
  
  // Example usage:
  // console.log(removeVowels("hello world")); // "hll wrld"
  
  // Function to get unique elements from two arrays
  function uniqueElements(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
  }
  
  // Example usage:
  // console.log(uniqueElements([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
  