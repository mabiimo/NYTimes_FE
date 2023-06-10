import { useState } from "react";
import { Input, Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const search = (q) => {
    setSearchQuery(q);
    fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=8w1wrooxiJrTGVggeaJoKCjH7witssUQ`)
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.results.filter((article) => article.title.toLowerCase().includes(q.toLowerCase()));
        setSearchResults(filteredResults);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigateToDetail = (article) => {
    navigate("/detailNews", { state: { article } });
  };

  return (
    <div className="w-auto items-center justify-center mt-5 px-14">
      <Input label="Cari Kata Kunci" onChange={({ target }) => search(target.value)} />
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {searchResults.map((article, i) => (
          <div key={i} onClick={() => navigateToDetail(article)}>
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
          </div>
        ))}
      </div>
    </div>
  );
}
