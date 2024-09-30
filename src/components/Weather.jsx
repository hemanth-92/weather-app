import { useState, useEffect } from "react";
import Search from "./Search";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    setError(null); 
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}&units=metric`,
      );
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeatherData("Kurnool");
  }, []);

  function handleSearch() {
    if (search.trim()) {
      fetchWeatherData(search);
    }
  }

  function getCurrentData() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="mx-auto my-8 max-w-md rounded-md bg-blue-100 p-8 shadow-md">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div className="py-8 text-center">
          <span className="animate-pulse text-2xl text-blue-500">
            Loading...
          </span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : weatherData ? (
        <div className="space-y-6 text-center">
          <div className="text-gray-800">
            <h2 className="text-2xl font-bold">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
            <p className="text-lg">{getCurrentData()}</p>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="text-4xl font-semibold">
              {weatherData?.main?.temp}°C
            </div>
            <p className="capitalize text-gray-600">
              {weatherData.weather && weatherData.weather[0]?.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <p className="font-semibold">Wind Speed</p>
              <div>{weatherData?.wind?.speed} m/s</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <p className="font-semibold">Humidity</p>
              <div>{weatherData?.main?.humidity}%</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-gray-500">No data available</div>
      )}
    </div>
  );
}
