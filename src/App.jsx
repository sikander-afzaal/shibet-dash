import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Sidebar from "./Layout/Sidebar/Sidebar";
import TopBar from "./Layout/TopBar/TopBar";
import Bet from "./Pages/Bet/Bet";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const setWidthWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidthWindow);

    return () => {
      window.removeEventListener("resize", setWidthWindow);
    };
  }, []);

  return (
    <div className="App">
      <Sidebar />
      {width <= 925 && <TopBar />}
      <div className="bottom-dash">
        {width > 925 && <TopBar />}
        <Bet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
