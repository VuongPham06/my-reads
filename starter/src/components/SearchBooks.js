import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const SearchBooks = (props) => {
  const { books, setBooks, showSearchPage, setShowSearchPage } = props;
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

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
  }, [searchInput, books, setSearchedBooks]);

  const setShelvesForSearchedBooks = (searchedBooks, books) => {
    return searchedBooks.map(searchedBook => {
      books.map(book => {
        if (book.id === searchedBook.id) {
          return { ...searchedBook, shelf: books.shelf };
        }

        return { ...searchedBook, shelf: "none" };
      });

      return { ...searchedBook, shelf: "none" };
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <span
          className="close-search"
          onClick={() => {
            BooksAPI.getAll().then(books => {
              setBooks(books);
            })
            setShowSearchPage(!showSearchPage);
          }}
        >
          Close
        </span>
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
                  backgroundImageUrl={book.imageLinks.smallThumbnail}
                  bookShelf={book.shelf}
                  showSearchPage={showSearchPage}
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
