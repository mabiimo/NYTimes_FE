import axios from "axios";

export const BooksReview = async () => {
  const response = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=8w1wrooxiJrTGVggeaJoKCjH7witssUQ");
  return response.data.results.books;
};
export const Articles = async () => {
  const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=8w1wrooxiJrTGVggeaJoKCjH7witssUQ");
  return response.data.results;
};
