import Book from './Book'
import UI from './UI'
import Store from './Store'

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('.booklist__form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const isbn = document.getElementById('isbn').value;

  if (title === '' || author === '' || year === '' || isbn === '') {
    UI.showAlert('Please fill all fields', 'danger');
  } else {
    const book = new Book(title, author, year, isbn);
    
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
    UI.showAlert('Book was added', 'success');
  }

});

document.querySelector('.booklist__table-body').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

