import "./App.css";

export default function App() {



  const fetchData = async () => {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric",
    );
    const jsonData = await data.json();
    console.log(jsonData)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <main className="flex flex-grow items-center justify-center m-4">
        <div className="w-3/4 h-full">
\        </div>
      </main>
    </div>
  );
}
