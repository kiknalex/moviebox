export default function Ratings({ imdb }) {
  return (
    <div className="flex gap-6 py-2 text-xs font-normal font-normal leading-3 ">
      <div className="flex items-center gap-2 ">
        <img src="/imdb.png" alt="imdb" width="35" height="17" />
        <p className="">{Math.round(imdb * 10) / 10}/10</p>
      </div>
    </div>
  );
}
