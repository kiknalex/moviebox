import { useState, useEffect, useRef } from "react";
import MovieDescription from "./MovieDescription";
import MovieIntroCarousel from "./MovieIntroCarousel";
import useFetch from "../../hooks/useFetch";

export default function MovieIntro() {
  const [moviesIntro, setMoviesIntro] = useState([]);
  const [currentIntro, setCurrentIntro] = useState([]);
  const { get, loading } = useFetch("https://api.themoviedb.org/3");
  const intervalRef = useRef(0);
  let introTimeoutId;

  useEffect(() => {
    get("/movie/upcoming?language=en-US&page=1")
      .then((data) => {
        const movies = data.results.map((item) => item).splice(0, 5);
        setCurrentIntro(movies[0]);
        setMoviesIntro(movies);
        startIntroInterval(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    startIntroInterval(moviesIntro);
  }, [currentIntro]);

  const startIntroInterval = (movies) => {
    introTimeoutId = intervalRef.current;
    clearInterval(introTimeoutId);
    introTimeoutId = setInterval(() => {
      const currentIndex = movies.indexOf(
        movies.find((movie) => currentIntro.id === movie.id)
      );
      if (currentIndex !== movies.length - 1) {
        setCurrentIntro(movies[currentIndex + 1]);
      } else {
        setCurrentIntro(movies[0]);
      }
    }, 5_000);
    intervalRef.current = introTimeoutId;
  };
  const onClickIntro = (index) => {
    setCurrentIntro(moviesIntro[index]);
  };
  return (
    <>
      {!loading && (
        <img
          src={`https://image.tmdb.org/t/p/original/${currentIntro.poster_path}`}
          alt={`${currentIntro.title}`}
          className="absolute -z-10 w-full  max-h-full  object-cover object-center filter brightness-50"
          width="500"
          height="750"
        />
      )}
      <div className="container flex justify-between items-center h-screen text-white">
        {currentIntro && <MovieDescription currentIntro={currentIntro} />}
        <MovieIntroCarousel
          handleIntroClick={onClickIntro}
          currentIntro={currentIntro}
          moviesIntro={moviesIntro}
        />
      </div>
    </>
  );
}
