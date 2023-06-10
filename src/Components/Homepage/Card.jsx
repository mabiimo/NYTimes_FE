import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Articles } from "../../Helper/Fetch/api";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {displayedArticles.map((article, i) => (
              <div key={i} onClick={() => navigateToDetail(article)}>
                <Card className="mt-1 w-96">
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {article.title}
                    </Typography>
                    <p className="mb-2 text-[12px]">{article.byline}</p>
                    <p className="mb-2 text-[12px]">
                      {new Date(article.published_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <Typography>{article.abstract}</Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
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
