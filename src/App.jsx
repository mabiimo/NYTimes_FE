import BooksReviews from "./Pages/BooksReviews";
import DetailNews from "./Pages/DetailNews";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchNews from "./Pages/SearchNews";
import DetailBooks from "./Components/Books/DetailBooks";

function App() {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" element={<Homepage />} />
        <Route path="/books" element={<BooksReviews />} />
        <Route path="/searchNews" element={<SearchNews />} />
        <Route path="/detailNews" element={<DetailNews />} />
        <Route path="/detailBooks" element={<DetailBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
