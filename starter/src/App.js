import "./App.css";
import { useEffect, useState } from "react";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchPage] = useState(false);

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks
          books={books}
          setBooks={setBooks}
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      ) : (
        <ListBooks
          books={books}
          setBooks={setBooks}
          showSearchPage={showSearchPage}
          setShowSearchPage={setShowSearchPage}
        />
      )}
    </div>
  );
};

export default App;
