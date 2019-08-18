export default class Store {
  static getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, i) => {
      if (book.isbn === isbn) {
        books.splice(i, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}