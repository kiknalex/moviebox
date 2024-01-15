import {useState, useEffect, useRef} from 'react';
import useFetch from './hooks/useFetch.jsx';
import Header from './components/Header/Header.jsx';
import MovieIntro from './components/MovieIntro/MovieIntro.jsx';
import FeaturedCards from './components/Cards/FeaturedCards.jsx';



function App() {
  const [moviesIntro, setMoviesIntro] = useState([]);
  const [currentIntro, setCurrentIntro] = useState(null);
  const {get, loading} = useFetch('https://moviesdatabase.p.rapidapi.com');
  const intervalRef = useRef(0);
  let introTimeoutId = null;
  useEffect(() => {
  get("/titles/random?info=base_info&list=top_rated_series_250")
  .then(data => {
    const movies = data.results.map(item => item).splice(0,5);
    setCurrentIntro(movies[0]);
    setMoviesIntro(movies);
    startIntroInterval(movies);
    console.log(movies);
  })
  .catch(error => {
    console.log(error);
  });
  }, [])

  useEffect(() => {
    startIntroInterval(moviesIntro);
  }, [currentIntro])


  const startIntroInterval = (movies) => {
    introTimeoutId = intervalRef.current;
    clearInterval(introTimeoutId);
    introTimeoutId = setInterval(() => {
              const currentIndex = movies.indexOf(movies.find(movie => currentIntro.id === movie.id));
              if(currentIndex !== movies.length - 1) {
                setCurrentIntro(movies[currentIndex + 1])
              } else {
                setCurrentIntro(movies[0]);
              }
          }, 5_000);
          intervalRef.current = introTimeoutId;
  }
  const onClickIntro = (index) => {
      setCurrentIntro(moviesIntro[index]);
  }
  return (
  <main className="">
  <Header />
  {!loading && <img src={currentIntro?.primaryImage.url} alt="intro poster" className='duration-300 absolute isolate -z-10 w-full min-h-40 max-h-full  object-cover object-center filter brightness-50' width="150" height="150" />}
    <MovieIntro handleIntroClick={onClickIntro} currentIntro={currentIntro} moviesIntro={moviesIntro} />
  <FeaturedCards />
  </main>
  )
}

export default App
