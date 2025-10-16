import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) setDarkMode(false);
    else setDarkMode(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white"
          : "bg-gradient-to-br from-sky-200 via-blue-300 to-indigo-200 text-gray-900"
      }`}
    >
      <div
        className={`absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-40 -z-10 transition-all duration-700 animate-pulse ${
          darkMode
            ? "bg-indigo-500/40 top-1/3 left-1/3"
            : "bg-sky-400/50 top-1/3 left-1/3"
        }`}
      ></div>

      <div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 -z-20 transition-all duration-700 ${
          darkMode
            ? "bg-purple-700/30 bottom-10 right-10"
            : "bg-indigo-300/40 bottom-10 right-10"
        }`}
      ></div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md border transition-all duration-500 ${
          darkMode
            ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
            : "bg-white/70 border-gray-300 text-gray-800 hover:bg-white/80"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div
        className={`text-center p-10 rounded-3xl shadow-2xl backdrop-blur-xl border transition-all duration-700 ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-white/60 border-gray-200"
        }`}
      >
        <h1
          className={`text-6xl md:text-8xl font-mono tracking-widest mb-4 transition-all duration-700 ${
            darkMode
              ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              : "text-gray-800"
          }`}
        >
          {formattedTime}
        </h1>
        <p
          className={`text-lg md:text-xl transition-opacity duration-700 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {formattedDate}
        </p>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
