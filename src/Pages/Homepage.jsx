import React from "react";
import NavigationBar from "../Components/NavigationBar";
import SearchComponent from "../Components/Homepage/SearchComponents";
import CardComponent from "../Components/Homepage/Card";

export default function Homepage() {
  return (
    <div className="container p-8">
      <NavigationBar />
      <SearchComponent />
      <div>
        <CardComponent />
      </div>
    </div>
  );
}
