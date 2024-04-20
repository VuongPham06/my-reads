import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    });
  }, []);

  useEffect(() => {
    if (searchInput.length === 0) {
      setSearchedBooks([]);
      return;
    }

    BooksAPI.search(searchInput).then(searchedBooks => {
      if (searchedBooks.error) {
        setSearchedBooks([]);
        return;
      }
      setSearchedBooks(setShelvesForSearchedBooks(searchedBooks, books));
    })
  }, [searchInput, books, setBooks, setSearchedBooks]);

  const setShelvesForSearchedBooks = (searchedBooks, books) => {
    return searchedBooks.map(searchedBook => {
      const foundBook = books.find(book => book.id === searchedBook.id);
      if (foundBook) {
        return { ...searchedBook, shelf: foundBook.shelf };
      } else {
        return { ...searchedBook, shelf: "none" };
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            searchedBooks && searchedBooks.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  setBooks={setSearchedBooks}
                  title={book.title}
                  authors={book.authors}
                  backgroundImageUrl={book.imageLinks?.smallThumbnail ?? "https://i.imgur.com/QxxDuUY.png"}
                  bookShelf={book.shelf}
                  showSearchPage={true}
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
};

export default SearchBooks;
