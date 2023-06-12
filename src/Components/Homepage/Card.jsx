import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Articles } from "../../Helper/Fetch/api";
import LoadingCard from "../Homepage/LoadingCard.jsx";

export default function CardComponent() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [showMoreCount, setShowMoreCount] = useState(6);

  const navigateToDetail = (article) => {
    navigate("/detailNews", { state: { article } });
  };

  useEffect(() => {
    Articles().then((data) => {
      setArticles(data);
      setDisplayedArticles(data.slice(0, showMoreCount));
    });
  }, [showMoreCount]);

  const handleSeeMore = () => {
    const newCount = showMoreCount + 6;
    setShowMoreCount(newCount);
  };

  return (
    <div>
      <div>
        {articles.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-5">
            {displayedArticles.map((article, i) => (
              <Link key={i} to="/detailNews" state={{ article }} className="cursor-pointer" onClick={() => navigateToDetail()}>
                <Card className="mt-1 w-96">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {article.title}
                    </Typography>
                    <div className="imgContainer flex items-center justify-center">
                      {article.multimedia && article.multimedia.length > 1 && <img className="imgContent mt-5 rounded-lg w-[700px]" src={article.multimedia[1].url} alt="Article" />}
                    </div>
                    <p className="mb-2 text-[12px] mt-2">{article.byline}</p>
                    <p className="mb-2 text-[12px]">
                      {new Date(article.published_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <Typography>{article.abstract} </Typography>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <LoadingCard />
          </div>
        )}
      </div>
      <div className="container text-center justify-center">
        <button className="container bg-blue-gray-300 m-10 rounded-lg text-white font-bold w-[200px] h-[50px]" onClick={handleSeeMore}>
          See More News
        </button>
      </div>
    </div>
  );
}
