import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { bookShelves } from "../constants/book-shelves";
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI"

const ListBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookShelves.map(shelf => (
            <BookShelf
              key={shelf.id}
              booksOfShelf={books.filter(book => {
                return book.shelf === shelf.id;
              })}
              setBooks={setBooks}
              shelfName={shelf.name}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div >
  )
};

export default ListBooks;
