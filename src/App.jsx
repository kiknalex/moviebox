import { useState, useEffect, useRef } from "react";
import useFetch from "./hooks/useFetch.jsx";
import Header from "./components/Header/Header.jsx";
import MovieIntro from "./components/MovieIntro/MovieIntro.jsx";
import FeaturedCardsWrapper from "./components/Cards/FeaturedCardsWrapper.jsx";
// NOTES:
// make and use Loader component

function App() {
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
    <main className="">
      <Header />
      {!loading && (
        <img
          src={`https://image.tmdb.org/t/p/original/${currentIntro.poster_path}`}
          alt={`${currentIntro.original_title}`}
          className="absolute -z-10 w-full  max-h-full  object-cover object-center filter brightness-50"
          width="500"
          height="750"
        />
      )}
      <MovieIntro
        handleIntroClick={onClickIntro}
        currentIntro={currentIntro}
        moviesIntro={moviesIntro}
      />
      <FeaturedCardsWrapper
        type={"movie"}
        category={"now_playing"}
        heading="Now Playing"
      />
      <FeaturedCardsWrapper
        type={"movie"}
        category={"top_rated"}
        heading="Top Rated"
      />
      <FeaturedCardsWrapper type={"person"} category={"popular"} heading="Featured Casts" />

    </main>
  );
}

export default App;
