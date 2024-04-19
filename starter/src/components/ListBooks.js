import { Link } from "react-router-dom"
import { bookShelves } from "../constants/book-shelves";
import BookShelf from "./BookShelf";

const ListBooks = (props) => {
  const { books, setBooks, showSearchPage, setShowSearchPage } = props;

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
              showSearchPage={showSearchPage}
              setBooks={setBooks}
              shelfName={shelf.name}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to={{
          pathname: "/search",
          state: {
            books: books,
            setBooks: setBooks,
            showSearchPage: !{ showSearchPage },
            setShowSearchPage: { setShowSearchPage }
          }
        }}>Add a book</Link>
        {/* <span onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</span> */}
      </div>
    </div>
  )
};

export default ListBooks;
