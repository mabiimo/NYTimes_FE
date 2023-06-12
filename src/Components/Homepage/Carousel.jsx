import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { fetchArticles } from "../../Helper/Fetch/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Example() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const navigateToDetail = (article) => {
    navigate("/detailNews", { state: { article } });
  };

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data.slice(0, 5));
    };
    getArticles();
  }, []);

  return (
    <Carousel className="w-full sm:w-[600px] md:w-[800px] mx-auto rounded-xl mb-10" onInvalid={false}>
      {articles.map((article, i) => (
        <Link key={i} to="/detailNews" state={{ article }} className="cursor-pointer" onClick={() => navigateToDetail()}>
          <div key={i} className="relative">
            <img src={article.multimedia?.[0]?.url} alt={article.title} />
            <p className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-black text-white font-bold text-lg sm:text-2xl md:text-3xl pb-10">{article.title}</p>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
