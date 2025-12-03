import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext.jsx";

export default function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, changeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
