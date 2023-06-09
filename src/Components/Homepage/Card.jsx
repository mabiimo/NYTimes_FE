import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Articles } from "../../Helper/Fetch/api";
import React, { useState, useEffect } from "react";

export default function CardComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Articles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div>
      {articles.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {articles.map((article, i) => (
            <Link to={`/detailNews`} key={i} target="_blank">
              <Card className="mt-6 w-96">
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
            </Link>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
