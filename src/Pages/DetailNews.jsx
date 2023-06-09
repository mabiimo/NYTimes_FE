import React from "react";
import NavigationBar from "../Components/NavigationBar";
import ContentNews from "../Components/DetailNews/ContentNews";
import { useParams } from "react-router-dom";

export default function DetailNews({ articles }) {
  // const { key } = useParams();

  // // Gunakan nilai key untuk mengakses data berita dari JSON yang sudah ada
  // const selectedArticle = articles[key];

  // if (!selectedArticle) {
  //   return <div>Loading...</div>; // Tampilkan pesan loading jika artikel tidak ditemukan
  // }

  return (
    <div className="container p-8">
      <NavigationBar />
      <ContentNews /*article={selectedArticle} */ />
    </div>
  );
}
