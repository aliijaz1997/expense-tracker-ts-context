import React from "react";
import App from "../components/App";
import ExpenseProvider from "../components/context/context";

export default function Home() {
  return (
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  );
}
