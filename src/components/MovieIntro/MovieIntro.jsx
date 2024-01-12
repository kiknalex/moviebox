import MovieDescription from './MovieDescription';
import MovieIntroCarousel from './MovieIntroCarousel';
export default function MovieIntro() {

    return (
        <div className='container flex justify-between mt-16 pb-40 text-white'>
            <MovieDescription />
            <MovieIntroCarousel />
        </div>
    )
}