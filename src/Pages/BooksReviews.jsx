import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Books from "../Components/Books/Books";
import SearchComponent from "../Components/Homepage/SearchComponents";

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(q);
};
export default function BooksReviews() {
  return (
    <div className="container p-8">
      <NavigationBar />
      <SearchComponent />
      <Books />
    </div>
  );
}
