export default function CastCard({item}) {
    console.log(item);
    return (
        <div>
            <img className='m-width-[200px]' src={`https://image.tmdb.org/t/p/w342/${item.profile_path}`} alt={`${item.name} poster`} width="200" height="300" />
            <h3 className='text-lg font-bold leading-normal pt-2'>{item.name}</h3>
        </div>
    )
}