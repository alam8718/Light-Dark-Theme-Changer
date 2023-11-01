import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme:()=>{},
  lightTheme:()=>{},
});

//this is use for wrap the theme provider previously we wrap things by writting ThemeContext.Provider  but here we store that line into ThemeProvider variable and export it so when this Theme.jsx is import somewhere we can use all these very easily and use it 
export const ThemeProvider = ThemeContext.Provider

//custom hooks
export default function useTheme(){
  return useContext(ThemeContext)
}


// all the things are done because you don't need to import ThemeContext everywhere 