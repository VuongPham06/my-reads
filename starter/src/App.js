import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/"><ListBooks /></Route>
        <Route path="/search"><SearchBooks /></Route>
      </div>
    </Router>
  )
};

export default App;
