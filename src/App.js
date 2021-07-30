import React from "react";
import DateOrganizedProvider from "./context/DateOrganized";
import { DateProvider } from "./context/DateToday";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <DateProvider>
        <DateOrganizedProvider>
          <AppRoutes />
        </DateOrganizedProvider>
      </DateProvider>
    </>
  );
}

export default App;
