import React from "react";
import SearchComponent from "../Components/Homepage/SearchComponents";
import NavigationBar from "../Components/NavigationBar";

export default function SearchNews() {
  return (
    <div className="container p-8">
      <NavigationBar />
      <SearchComponent />
    </div>
  );
}
