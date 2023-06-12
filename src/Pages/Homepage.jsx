import React from "react";
import NavigationBar from "../Components/NavigationBar";
import SearchComponent from "../Components/Homepage/SearchComponents";
import CardComponent from "../Components/Homepage/Card";
import CarouselContent from "../Components/Homepage/Carousel";

export default function Homepage() {
  return (
    <div className="container p-8">
      <NavigationBar />
      <SearchComponent />
      <CarouselContent />
      <CardComponent />
    </div>
  );
}
