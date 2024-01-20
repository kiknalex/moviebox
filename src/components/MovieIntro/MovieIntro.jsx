import MovieDescription from "./MovieDescription";
import MovieIntroCarousel from "./MovieIntroCarousel";

export default function MovieIntro({
  handleIntroClick,
  currentIntro,
  moviesIntro,
  loading
}) {
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
        handleIntroClick={handleIntroClick}
        currentIntro={currentIntro}
        moviesIntro={moviesIntro}
      />
    </div>
    </>
  );
}
