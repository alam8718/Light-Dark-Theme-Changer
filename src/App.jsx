import {useEffect, useState} from "react";
import {ThemeProvider} from "./Context/Theme";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const catchHtml = document.querySelector("html");
  const catchBody = document.querySelector("body");
  //useing useEffect for change running the functionality inside of it so that when their is a change in the dependency it re-rendered again .
  useEffect(() => {
    catchHtml.classList.remove("light", "dark");
    catchHtml.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center bg-slate-900 dark:bg-white">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
