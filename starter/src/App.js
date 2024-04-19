import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom"
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
    <Router>
      <div className="app">
        <Route
          exact path="/"
          element={<ListBooks
            books={books}
            setBooks={setBooks}
            showSearchPage={showSearchPage}
            setShowSearchPage={setShowSearchPage}
          />} />
        <Route
          path="/search"
          element={<SearchBooks
            books={books}
            setBooks={setBooks}
            showSearchPage={showSearchPage}
            setShowSearchPage={setShowSearchPage}
          />} />
      </div>
    </Router>
  )
};

export default App;
