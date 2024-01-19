import { useState, useEffect } from "react";
import FeaturedCards from "./FeaturedCards";
import useFetch from "../../hooks/useFetch";
export default function FeaturedCardsWrapper({ type, category, heading }) {
  const [content, setContent] = useState([]);
  const { get, loading } = useFetch("https://api.themoviedb.org/3");
  useEffect(() => {
    get(`/${type}/${category}?language=en-US&page=1`)
      .then((data) => {
        setContent(data.results);
        // console.log(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <FeaturedCards type={type} content={content} heading={heading} loading={loading} />;
}
