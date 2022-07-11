import React from "react";
import Awards from "./components/awards/Awards";

function App() {
  return <div className="App">{Awards("play-store", "hi\nbye")}</div>;
}

export default App;
