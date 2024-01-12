export default function SearchBar() {
    
    return (
        <div className="flex-grow grid place-items-center">
            <form action="" className="w-full border-2 border-white flex px-3 py-1 text-white" >
                <label for="search" className="flex-grow">
                    <input id="search" className="w-full bg-transparent" type="text" placeholder="What do you want to watch?" />
                </label>
                <label>
                    <button type="submit">Search</button>
                </label>
            </form>
        </div>
    )
}