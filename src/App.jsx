import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./comps/Header";
import Cards from "./comps/Cards";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    if (!document.querySelector(".screenFlash")) {
      const body = document.querySelector("body");
      const screenFlashNode = document.createElement("div");
      screenFlashNode.classList.add("screenFlash");

      body.append(screenFlashNode);
    }
  }, []);
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Cards
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
      <footer>
        Copyright © 2024
        <a href="https://github.com/Wespro"> Abdelrahman Mohammed</a>
      </footer>
      <script
        src="./js files/Game Related/domInteractions.js "
        type="module"
      ></script>
    </>
  );
}

export default App;
