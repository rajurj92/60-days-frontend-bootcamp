const books = [
  { title: "Book1", author: "Author1", isAvailable: true },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author3", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book4", author: "Author4", isAvailable: true },
];

function listOfBooks() {
  return books;
}
function markAsBorrowed(title) {
  for (let book of books) {
    if (book.title === title) {
      if (book.isAvailable === true) {
        book.isAvailable = false;
        return book;
      }
    }
  }

  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i].isAvailable === false) {
  //       return `${books[i].title} borrowed `;
  //     }
  //   }
}
function returnBook(title) {
  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i].isAvailable === true) {
  //       return `${books[i].title} Available `;
  //     }
  //   }
  for (let book of books) {
    if (book.title === title) {
      if (book.isAvailable === false) {
        book.isAvailable = true;
        return book;
      }
    }
  }
}

function findBooksByAuthor(author) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === author) {
      return books[i].title;
    }
  }
}

console.log(listOfBooks(books));
console.log(markAsBorrowed("Book3"));
console.log(returnBook("Book3"));
console.log(findBooksByAuthor("Author4"));
