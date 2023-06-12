import { Link, useLocation } from "react-router-dom";

export default function ContextNews() {
  const location = useLocation();
  const { article } = location.state;

  const openArticleInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="card justify-center gap-10 items-center flex-wrap px-12">
      <h1 className="title text-[30px] font-bold mt-10 text-center italic">{article.title}</h1>

      <div className="imgContainer flex items-center justify-center">
        <img className="imgContent mt-5 rounded-lg w-[700px]" src={article.multimedia[0].url} alt="Article" />
      </div>
      <p className="creator items-center justify-center flex mt-3 text-xs">Creator: {article.byline}</p>
      <p className="date items-center justify-center flex text-sm">
        Date:{" "}
        {new Date(article.published_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="descNews mt-5">
        {article.abstract}{" "}
        {article.url && (
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="url text-blue-400">
            [Read More]
          </a>
        )}
      </p>
    </div>
  );
}
