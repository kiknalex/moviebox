export default function MovieIntroCarousel({
  handleIntroClick,
  moviesIntro,
  currentIntro,
}) {
  return (
    <div className="hidden sm:flex  flex-col justify-center font-bold leading-tight text-xs gap-3">
      {moviesIntro.map((movie, index) => {
        let scale = "";
        let textColor = "text-gray-300";
        if (moviesIntro[index] === currentIntro) {
          scale = "scale-150";
          textColor = "text-white";
        }
        return (
          <button
            key={movie.id}
            className={`${textColor} ${scale}`}
            onClick={() => handleIntroClick(index)}
          >
            <span className="absolute top-1.5 -left-4 w-3 h-0.5 bg-white rounded-sm"></span>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
