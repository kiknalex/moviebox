import {useState, useEffect} from 'react';
import genres from "./genres.js"
import Ratings from '../Misc/Ratings';
export default function Card({item}) {
    const showGenres = () => {
       const filteredGenres = genres().filter(genre => item.genre_ids.find(id => id === genre.id));
       const convertedGenres = filteredGenres.map((genre, index) => {
        if(index !== filteredGenres.length - 1) {
            return genre.name + ", "
        } else {
            return genre.name;
        }
       });
       return convertedGenres;
    }
    return (
        <div>
            
            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={`${item.original_title} poster`} width="250" height="370" />
            
            <p>USA, {item.release_date}</p>
            <h3>{item.original_title}</h3>
            <Ratings imdb={item.vote_average} />
            <p>{showGenres()}</p>
        </div>
    )
}