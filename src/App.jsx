import { useContext } from "react";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import { DarkModeContext } from "./components/context/DarkModeContext.jsx";

export default function App() {
  const { isDark } = useContext(DarkModeContext);

  const appClasses = isDark
    ? "min-h-screen flex flex-col bg-black text-white"
    : "min-h-screen flex flex-col bg-white text-black";

  return (
    <div className={appClasses}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
