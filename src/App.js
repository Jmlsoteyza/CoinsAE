import "./styles/style.css";
import MainApp from "./Pages/MainApp";
import { Routes, Route } from "react-router-dom";
import MarketGraph from "./Pages/MarketGraph";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
  }


  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/coin" element={<MarketGraph />}>
            <Route path=":coinId" element={<MarketGraph />}></Route>
          </Route>
        </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
