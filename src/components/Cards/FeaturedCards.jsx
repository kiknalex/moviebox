import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";
export default function FeaturedCards({ type, category, content, heading, loading }) {
  const [emblaRef] = useEmblaCarousel();
  console.log(type);
  return (
    <section className="container w-full mt-12">
      <h2 className="text-4xl font-bold">{heading}</h2>
      <div className="flex gap-2 mt-10 relative">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-20">
            {content.map((item) => {
              return (
                <Card className="embla__slide" type={type} key={item.id} item={item} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
