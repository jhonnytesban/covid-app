import React from "react";
import { DateProvider } from "./context/DateToday";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <DateProvider>
        <AppRoutes />
      </DateProvider>
    </>
  );
}

export default App;
