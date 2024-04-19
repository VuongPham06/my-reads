import * as BooksAPI from "../BooksAPI";
import { shelves } from "../constants/book-shelves";

const Book = (props) => {
  const { book, setBooks, title, authors, backgroundImageUrl, bookShelf, showSearchPage } = props;

  const handleOnBookShelfPage = (shelfId) => {
    BooksAPI.update(book, shelfId).then(response =>
      BooksAPI.getAll().then(books => {
        setBooks(books);
      })
    );
  };

  const handleOnSearchPage = (shelfId) => {
    BooksAPI.update(book, shelfId);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={bookShelf} onChange={e => {
            const shelfId = e.target.value;
            if (shelfId !== bookShelf) {
              if (showSearchPage) {
                handleOnSearchPage(shelfId);
              } else {
                handleOnBookShelfPage(shelfId);
              }
            }
          }}>
            <option disabled>
              Move to...
            </option>
            {
              shelves.map(shelf => (
                <option key={shelf.id} value={shelf.id}>{shelf.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {
          authors &&
          authors.map((author, index) => (
            index === 0 ? `${author}` : `, ${author}`
          ))

        }
      </div>
    </div>
  )
};

export default Book;
