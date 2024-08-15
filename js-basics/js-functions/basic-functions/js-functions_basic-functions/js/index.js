console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

let bookTitle = "The Lord of the Javascript";
let booktAuthor = "Mario";
let bookRating = 4.2;
let numberOfSales = 120;

// const books = {
//   bookTitle: "The Lord of the Javascript",
//   bookAuthor: "Mario",
//   bookRating: 4.2,
//   numberOfSales: 120,
// };

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120


Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

console.log("Book", bookTitle, booktAuthor, bookRating, numberOfSales);

bookRating += 0.5;
numberOfSales += 657;
console.log("Book", bookTitle, booktAuthor, bookRating, numberOfSales);

// console.log("Book", books);
// books.bookRating = 4.9;
// books.numberOfSales = 400;
// console.log("Book", books);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData(book) {
  console.log("Book", book.title, book.author, book.rating, book.sales);
}
let book = {
  title: "The Lord of the Javascript",
  author: "Mario",
  rating: 4.2,
  sales: 120,
};
logBookData(book);
book.sales += 2;
logBookData(book);

// --^-- write your code here --^--
