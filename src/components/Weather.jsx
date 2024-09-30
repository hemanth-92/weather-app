import { useState } from "react";
import Search from "./Search";
import { useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`,
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      if (data) {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => fetchWeatherData("Kurnool"), []);

  function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <h2>{weatherData?.name}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
