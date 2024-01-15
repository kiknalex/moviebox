import MovieDescription from './MovieDescription';
import MovieIntroCarousel from './MovieIntroCarousel';

export default function MovieIntro({handleIntroClick, currentIntro, moviesIntro}) {
    return (
        <div className='container flex justify-between items-center h-screen text-white'>
            {currentIntro && <MovieDescription currentIntro={currentIntro} />}
            <MovieIntroCarousel handleIntroClick={handleIntroClick} currentIntro={currentIntro} moviesIntro={moviesIntro} />
        </div>
    )
}