import BooksReviews from "./Pages/BooksReviews";
import DetailNews from "./Pages/DetailNews";
import Homepage from "./Pages/Homepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchNews from "./Pages/SearchNews";

function App() {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" Component={Homepage} />
        <Route path="/books" Component={BooksReviews} />
        <Route path="/searchNews" Component={SearchNews} />
        <Route path="/detailNews" element={<DetailNews />} />
      </Routes>
    </Router>
  );
}

export default App;
