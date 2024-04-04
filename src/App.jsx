import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Intro from "./components/intro";
import Ditlance from "./components/ditlance";
import Dengun from "./components/dengun";
import EDUFREE from "./components/edufree";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Ditlance />
      <Dengun />
      <EDUFREE  />
    </>
  );
}

export default App;
