import { useLocation } from "react-router-dom";

export default function DetailBooks() {
  const { state } = useLocation();
  const book = state && state.book;

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card justify-center gap-10 items-center flex-wrap px-12">
      <h1 className="title text-[30px] font-bold mt-10 text-center italic">{book.title}</h1>
      <p className="creator items-center justify-center flex mt-3 text-xs">Creator: {book.author}</p>
      <img src={book.book_image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}
