import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";
export default function FeaturedCards({ category, categoryItems }) {
  const [content, setContent] = useState([]);
  const [emblaRef] = useEmblaCarousel();
  const { get, loading } = useFetch("https://api.themoviedb.org/3");
  useEffect(() => {
    get("/movie/now_playing?language=en-US&page=1")
      .then((data) => {
        setContent(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="container w-full mt-12">
      <h2 className="text-4xl font-bold">{category}</h2>
      <div className="flex gap-2 mt-10 relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-20">
            {content.map((item) => {
              return (
                <Card className="embla__slide" key={item.id} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
