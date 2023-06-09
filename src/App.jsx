import BooksReviews from "./Pages/BooksReviews";
import DetailNews from "./Pages/DetailNews";
import Homepage from "./Pages/Homepage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index exact path="/" Component={Homepage} />
        <Route path="/books" Component={BooksReviews} />
        {/* <Route path="/detailNews/:key" render={({ match }) => <DetailNews articles={articles} key={match.params.key} />} /> */}
        <Route path="/detailNews" Component={DetailNews} />
      </Routes>
    </Router>
  );
}

export default App;
