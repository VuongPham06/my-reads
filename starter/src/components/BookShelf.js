import Book from "./Book"

const BookShelf = (props) => {
  const { booksOfShelf, setBooks, shelfName } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            booksOfShelf && booksOfShelf.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  setBooks={setBooks}
                  title={book.title}
                  authors={book.authors}
                  backgroundImageUrl={book.imageLinks?.smallThumbnail ?? "https://i.imgur.com/QxxDuUY.png"}
                  bookShelf={book.shelf}
                  showSearchPage={false}
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
