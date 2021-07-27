import React from "react";
import "./App.css";
import { DateProvider } from "./context/DateToday";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <DateProvider>
        <HomePage />
      </DateProvider>
    </>
  );
}

export default App;
