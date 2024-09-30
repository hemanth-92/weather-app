export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="mb-4 mt-6 flex w-full items-center justify-center gap-3">
      <input
        type="text"
        className="h-12 w-3/4 rounded-lg border border-gray-300 bg-white p-4 text-gray-700 shadow-sm transition-all duration-200 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button
        className="h-12 rounded-lg bg-blue-600 px-5 font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
