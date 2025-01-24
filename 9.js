// 1. Average of Even Numbers
function averageEvenNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);  // Filter even numbers
    if (evenNumbers.length === 0) return 0;  // Return 0 if no even numbers
    return evenNumbers.reduce((sum, num) => sum + num, 0) / evenNumbers.length;  // Calculate average
  }
  
  // 2. Longest Word
  function longestWord(words) {
    return words.reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest;
    }, '');
  }
  
  // 3. Average Number of Pages Across Books
  function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((sum, pages) => sum + pages, 0);  // Sum pages
    return totalPages / books.length;  // Calculate average
  }
  
  // 4. Frequency of Each String
  function stringFrequency(arr) {
    return arr.reduce((freq, str) => {
      freq[str] = (freq[str] || 0) + 1;  // Increment frequency of each string
      return freq;
    }, {});
  }
  
  // 5. Count of People by City
  function countByCity(people) {
    return people.reduce((cityCount, person) => {
      cityCount[person.city] = (cityCount[person.city] || 0) + 1;  // Count people by city
      return cityCount;
    }, {});
  }
  
  // Example usage:
  console.log(averageEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: 4
  console.log(longestWord(["apple", "banana", "kiwi", "strawberry"]));  // Output: "strawberry"
  const books = [
    { title: "Book 1", author: "Author 1", pages: 100 },
    { title: "Book 2", author: "Author 2", pages: 150 },
    { title: "Book 3", author: "Author 3", pages: 200 }
  ];
  console.log(averagePages(books));  // Output: 150
  console.log(stringFrequency(["hello", "world", "hello"]));  // Output: { hello: 2, world: 1 }
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  console.log(countByCity(people));  // Output: { "New York": 2, "Chicago": 1 }
  