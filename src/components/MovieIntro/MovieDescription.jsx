import Ratings from "../Misc/Ratings";
export default function MovieDescription({ currentIntro }) {
  console.log(currentIntro);
  return (
    <div className="flex flex-col justify-center items-start h-[600px] w-96 gap-4">
      <h3 className="text-6xl font-normal font-bold leading-14">
        {currentIntro.original_title}
      </h3>
      <Ratings imdb={currentIntro.vote_average} />
      <p className="text-sm font-normal font-medium leading-4">
        {currentIntro.overview}
      </p>
      <a className="flex justify-center items-center gap-2 py-2 px-6 bg-red-800 rounded-md hover:bg-red-700 duration-300 text-sm cursor-pointer font-bold tracking-wider uppercase">
        <span>
          <img src="src\assets\playIcon.svg" alt="" width="16" height="16" />
        </span>
        WATCH TRAILER
      </a>
    </div>
  );
}
