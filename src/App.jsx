import {useState, useEffect} from 'react';
import useFetch from './hooks/useFetch.js';
import Header from './components/Header/Header.jsx';
import MovieIntro from './components/MovieIntro/MovieIntro.jsx';
import FeaturedCards from './components/Cards/FeaturedCards.jsx';
function App() {
  
  return (
  <main className="">
  <div className='relative'>
  <img src="src\assets\keanu.jpg" alt="intro poster" className='absolute w-full min-h-40 max-h-full overflow-hidden object-cover filter brightness-50' width="150" height="150" />
  <div className='isolate z-10'>
  <Header />
  <MovieIntro />
  </div>
  </div>
  <FeaturedCards />
  </main>
  )
}

export default App
