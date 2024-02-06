import { useState, useEffect, useRef } from "react";
import useFetch from "./hooks/useFetch.jsx";
import Header from "./components/Header/Header.jsx";
import MovieIntro from "./components/MovieIntro/MovieIntro.jsx";
import FeaturedCards from "./components/Cards/FeaturedCards.jsx";
import Footer from "./components/Footer/Footer.jsx"
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
    <>
      <Header />
      <main className="">
        <MovieIntro
          loadin={loading}
          handleIntroClick={onClickIntro}
          currentIntro={currentIntro}
          moviesIntro={moviesIntro}
        />
        <FeaturedCards
          type={"movie"}
          category={"now_playing"}
          heading="Now Playing"
        />
        <FeaturedCards
          type={"movie"}
          category={"top_rated"}
          heading="Top Rated"
        />
        <FeaturedCards
          type={"person"}
          category={"popular"}
          heading="Featured Casts"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
