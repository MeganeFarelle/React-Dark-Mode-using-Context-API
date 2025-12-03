import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext.jsx";

export default function ChangeMode() {
  const { isDark, changeMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={changeMode}
      className="px-4 py-2 rounded bg-blue-500 text-white"
    >
      {isDark ? "Mode clair" : "Mode sombre"}
    </button>
  );
}
