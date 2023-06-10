import { useLocation } from "react-router-dom";

export default function ContextNews() {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="card justify-center gap-10 items-center flex-wrap px-12">
      <h1 className="title text-[25px] font-bold mt-10 text-center">{article.title}</h1>
      <p className="creator items-center justify-center flex mt-3">Penulis: {article.byline}</p>
      <p className="date items-center justify-center flex">
        Date:{" "}
        {new Date(article.published_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="imgContainer flex items-center justify-center">
        <img className="imgContent mt-5 rounded-lg w-[700px]" src={article.multimedia[0].url} alt="Article" />
      </div>
      <p className="descNews mt-5">{article.abstract}</p>
    </div>
  );
}
