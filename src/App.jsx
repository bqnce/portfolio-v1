import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center flex-col bg-[#B2BEB5]">
        <Panel />
      </div>
    </>
  );
}

export default App;
