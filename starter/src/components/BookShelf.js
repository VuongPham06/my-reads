import Book from "./Book"

const BookShelf = (props) => {
  const { booksOfShelf, setBooks, shelfName, showSearchPage } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booksOfShelf && booksOfShelf.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  setBooks={setBooks}
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
}

export default BookShelf;
