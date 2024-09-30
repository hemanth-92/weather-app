
export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="mb-3 mt-3 flex w-full items-center justify-around">
      <input
        type="text"
        className="h-11 w-3/4 rounded-sm border bg-white p-4 text-gray-600 shadow-sm outline-none"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="cursor-pointer rounded-md bg-black p-2 text-center text-white"
        onClick={handleSearch}
      >
        Search Weather
      </button>
    </div>
  );
}
