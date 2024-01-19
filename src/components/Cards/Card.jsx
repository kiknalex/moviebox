import MovieCard from "./CardTypes/MovieCard";
import CastCard from "./CardTypes/CastCard";


export default function Card({type, item}) {
    if(type === "movie") return <MovieCard item={item} />
    else if(type === "person") return <CastCard item={item} />
    else return null;
}