import genres from "../../Misc/genres.js";
import Ratings from "../../Misc/Ratings";
export default function MovieCard({ item }) {
  const showGenres = () => {
    const filteredGenres = genres().filter((genre) =>
      item.genre_ids.find((id) => id === genre.id)
    );
    const convertedGenres = filteredGenres.map((genre, index) => {
      if (index !== filteredGenres.length - 1) {
        return genre.name + ", ";
      } else {
        return genre.name;
      }
    });
    return convertedGenres;
  };
  return (
    <div>
      <img
        className="m-width-[200px]"
        src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
        alt={`${item.title} poster`}
        width="200"
        height="300"
      />
      <p className="text-xs pt-2 text-gray-400">
        USA, {new Date(item.release_date).getFullYear()}
      </p>
      <h3 className="text-lg font-bold leading-normal pt-2">{item.title}</h3>
      <Ratings imdb={item.vote_average} />
      <p className="text-xs pt-2 text-gray-400 flex flex-wrap">
        {showGenres()}
      </p>
    </div>
  );
}
