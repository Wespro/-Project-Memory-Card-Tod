import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./comps/Header";
import Cards from "./comps/Cards";

function App() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}

export default App;
