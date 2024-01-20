export default function SearchBar() {
  return (
    <div className="grid place-items-center w-7/12">
      <form
        action=""
        className="w-full border-2 border-white flex px-2 py-3 text-white rounded-md"
      >
        <label htmlFor="search" className="flex-grow">
          <input
            id="search"
            className="w-full bg-transparent placeholder-white focus:outline-none"
            type="text"
            placeholder="What do you want to watch?"
          />
        </label>
        <label>
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="text-center pl-4"
          >
            <img
              src="../public/searchIcon.svg"
              alt="search"
              width="16"
              height="16"
            />
          </button>
        </label>
      </form>
    </div>
  );
}
