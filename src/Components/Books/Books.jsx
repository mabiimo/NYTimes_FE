import React, { useState, useEffect } from "react";
import { BooksReview } from "../../Helper/Fetch/api";

export default function Books() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    BooksReview().then((results) => {
      setApiData(results);
    });
  }, []);

  return (
    <div>
      {apiData.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {apiData.map((book, i) => (
            <div className="max-w-xs rounded-lg -hidden shadow-lg " key={i}>
              <img className="w-full rounded-t-lg" src={book.book_image} alt={book.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">Author: {book.author}</p>
                <p className="text-gray-700 text-base">Rank: {book.rank}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
