export default function ApiAttribution() {
  return (
    <div className="flex gap-4">
      <img
        src="src\assets\themoviedbicon.svg"
        alt="The movie DB api icon"
        width="120"
        height="60"
      />
      <small>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </small>
    </div>
  );
}
