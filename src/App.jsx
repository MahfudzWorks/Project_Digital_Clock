import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format waktu & tanggal
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
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-slate-200 to-gray-100 text-gray-900"
      } font-sans`}
    >
      {/* Efek Glow Latar */}
      <div
        className={`absolute w-[400px] h-[400px] rounded-full blur-3xl -z-10 animate-pulse transition-colors duration-700 ${
          darkMode ? "bg-indigo-500/30" : "bg-blue-300/40"
        }`}
      ></div>

      {/* Tombol Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-5 right-5 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md transition-all duration-500 ${
          darkMode
            ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
            : "bg-gray-800/10 hover:bg-gray-800/20 text-gray-800 border border-gray-400/30"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Jam Digital */}
      <div
        className={`text-center p-10 rounded-2xl shadow-2xl backdrop-blur-lg border transition-all duration-700 ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-white/60 border-gray-200"
        }`}
      >
        <h1
          className={`text-6xl md:text-8xl font-mono tracking-widest mb-4 transition-all duration-700 ${
            darkMode
              ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
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

      {/* Footer */}
      <footer
        className={`absolute bottom-5 text-sm transition-colors duration-700 ${
          darkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        Made with ❤️ using React + Tailwind
      </footer>
    </div>
  );
}

export default App;
