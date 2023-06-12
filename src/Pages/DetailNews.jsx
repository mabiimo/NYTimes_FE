import React from "react";
import NavigationBar from "../Components/NavigationBar";
import ContentNews from "../Components/DetailNews/ContentNews";

export default function DetailNews({ articles }) {
  return (
    <div className="container p-8">
      <NavigationBar />
      <ContentNews />
    </div>
  );
}
